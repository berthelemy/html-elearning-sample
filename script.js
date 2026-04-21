(function () {
  const sectionIds = ["intro", "when-to-use", "formation", "quiz"];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const prevButton = document.getElementById("prev-section");
  const nextButton = document.getElementById("next-section");
  const statusChip = document.getElementById("lesson-status");
  const tabs = Array.from(document.querySelectorAll("[data-section-link]"));
  const sectionCompletion = {
    intro: false,
    whenToUse: false,
    formation: false,
    quiz: false,
  };

  let currentIndex = 0;

  function updateSectionVisibility(index) {
    currentIndex = index;

    sections.forEach((section, sectionIndex) => {
      const isActive = sectionIndex === currentIndex;
      section.hidden = !isActive;
      if (isActive) {
        section.focus();
      }
    });

    tabs.forEach((tab, tabIndex) => {
      tab.classList.toggle("active", tabIndex === currentIndex);
      tab.setAttribute("aria-current", tabIndex === currentIndex ? "page" : "false");
    });

    if (statusChip) {
      statusChip.textContent = `Progress: ${currentIndex + 1}/${sections.length} sections`;
    }

    if (prevButton) {
      prevButton.disabled = currentIndex === 0;
    }

    if (nextButton) {
      nextButton.disabled = currentIndex === sections.length - 1;
    }

    if (window.lessonScorm) {
      window.lessonScorm.saveProgress({
        sectionIndex: currentIndex,
        sectionCompletion: sectionCompletion,
      }, { commit: false });
    }

    if (history && history.replaceState) {
      history.replaceState(null, "", `#${sectionIds[currentIndex]}`);
    }
  }

  function jumpToSection(id) {
    const index = sectionIds.indexOf(id);
    if (index >= 0) {
      updateSectionVisibility(index);
    }
  }

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      if (currentIndex > 0) {
        updateSectionVisibility(currentIndex - 1);
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      if (currentIndex < sections.length - 1) {
        updateSectionVisibility(currentIndex + 1);
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      const hash = tab.getAttribute("href");
      if (!hash || !hash.startsWith("#")) {
        return;
      }
      event.preventDefault();
      jumpToSection(hash.slice(1));
    });
  });

  document.querySelectorAll("[data-reveal-target]").forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-reveal-target");
      if (!targetId) {
        return;
      }
      const panel = document.getElementById(targetId);
      if (!panel) {
        return;
      }
      panel.hidden = !panel.hidden;
      button.setAttribute("aria-expanded", String(!panel.hidden));

      if (!panel.hidden) {
        sectionCompletion.intro = true;
      }
    });
  });

  document.querySelectorAll("[data-flip-card]").forEach((card) => {
    card.setAttribute("aria-pressed", "false");
    card.addEventListener("click", function () {
      card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(card.classList.contains("is-flipped")));
      sectionCompletion.whenToUse = true;
    });
  });

  const matchForm = document.getElementById("match-form");
  const matchResult = document.getElementById("match-result");
  if (matchForm && matchResult) {
    matchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const answers = {
        je: "ais",
        nous: "ions",
        ils: "aient",
      };

      let correct = 0;
      Object.keys(answers).forEach((key) => {
        const field = matchForm.querySelector(`[data-match='${key}']`);
        if (field) {
          field.classList.remove("is-invalid");
        }
        if (field && field.value === answers[key]) {
          correct += 1;
        } else if (field && field.value) {
          field.classList.add("is-invalid");
        }
      });

      if (correct === Object.keys(answers).length) {
        matchResult.textContent = "Excellent. All matches are correct.";
        sectionCompletion.formation = true;
        if (window.lessonScorm) {
          window.lessonScorm.saveProgress({
            sectionCompletion: sectionCompletion,
          }, { commit: true });
        }
      } else {
        matchResult.textContent = `You got ${correct} of ${Object.keys(answers).length}. Try again.`;
      }
    });
  }

  const quizForm = document.getElementById("quiz-form");
  const quizResult = document.getElementById("quiz-result");
  if (quizForm && quizResult) {
    quizForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const key = {
        q1: "b",
        q2: "a",
        q3: "a",
        q4: "a",
        q5: "a",
      };

      let answered = 0;
      let correct = 0;

      Object.keys(key).forEach((questionId) => {
        const answer = quizForm.querySelector(`input[name='${questionId}']:checked`);
        if (answer) {
          answered += 1;
          if (answer.value === key[questionId]) {
            correct += 1;
          }
        }
      });

      if (answered !== Object.keys(key).length) {
        quizResult.className = "mt-4 result-box fail";
        quizResult.textContent = "Please answer every question before submitting.";
        return;
      }

      const score = Math.round((correct / Object.keys(key).length) * 100);
      const passed = score > 80;

      quizResult.className = `mt-4 result-box ${passed ? "pass" : "fail"}`;
      quizResult.textContent = `Score: ${score}%. Result: ${passed ? "Pass" : "Not yet passed"}.`;

      sectionCompletion.quiz = true;

      if (window.lessonScorm) {
        window.lessonScorm.recordQuizResult(score, passed);
      }
    });
  }

  if (window.lessonScorm) {
    window.lessonScorm.initialize();
    const saved = window.lessonScorm.loadProgress();
    if (saved && saved.sectionCompletion && typeof saved.sectionCompletion === "object") {
      Object.assign(sectionCompletion, saved.sectionCompletion);
    }
    if (saved && Number.isInteger(saved.sectionIndex)) {
      updateSectionVisibility(Math.min(Math.max(saved.sectionIndex, 0), sections.length - 1));
    } else {
      updateSectionVisibility(0);
    }
  } else {
    updateSectionVisibility(0);
  }
})();
