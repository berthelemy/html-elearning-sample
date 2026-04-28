(function () {
  const LANG_STORAGE_KEY = "lesson-language";
  const DEFAULT_LOCALE = "en";
  const SUPPORTED_LOCALES = ["en", "es"];

  const translations = {
    en: {
      document_title: "French Imperfect Tense - CEFR A2",
      github_ribbon_label: "View source on GitHub",
      github_ribbon_link: "See the code on GitHub",
      skip_to_content: "Skip to lesson content",
      hero_eyebrow: "CEFR A2 French Grammar",
      hero_title: "Master the French Imperfect Tense",
      hero_subtitle: "Learn when to use it, how to build it, and test yourself with a final quiz.",
      language_label: "Language",
      language_selector_aria: "Language selector",
      language_option_en: "English",
      language_option_es: "Spanish",
      lesson_sections_nav_label: "Lesson sections",
      tab_intro: "Introduction",
      tab_when_to_use: "When to use",
      tab_how_to_form: "How to form",
      tab_quiz: "Quiz",
      intro_title: "1. Introduction",
      intro_description: "The imperfect tense describes repeated, ongoing, or descriptive actions in the past. In this lesson, you will move from recognition to production and then complete a graded quiz.",
      intro_goal_1: "You will identify when imperfect is appropriate.",
      intro_goal_2: "You will practice building -er verb forms in imperfect.",
      intro_goal_3: "You will complete a final scored quiz tracked for SCORM.",
      intro_reveal_title: "Click to reveal",
      intro_reveal_description: "Choose a context and reveal if imperfect is suitable.",
      intro_reveal_btn_1: "Daily habits in the past",
      intro_reveal_btn_2: "Single completed event",
      intro_reveal_btn_3: "Background description",
      intro_reveal_answer_1: "Yes. Repeated past habits often use the imperfect.",
      intro_reveal_answer_2: "No. A single completed event often uses passe compose.",
      intro_reveal_answer_3: "Yes. Weather, emotions, and scene-setting often use the imperfect.",
      when_title: "2. When to use the imperfect tense",
      when_description: "Use the imperfect for background descriptions, ongoing states, and repeated actions in the past.",
      when_tip_1: "<strong>Memory tip:</strong> ask yourself if the action was a repeated habit or a setting/state in progress.",
      when_tip_2: "If yes, imperfect is often the right starting choice.",
      when_flip_title: "Flip cards",
      when_flip_description: "Activate each card to see an example sentence.",
      flip_front_1: "Background scene",
      flip_front_2: "Repeated action",
      flip_front_3: "Ongoing feeling",
      flip_front_4: "Interrupted action",
      formation_title: "3. How to make the imperfect for -er verbs",
      formation_description: "Start from the nous present form, remove <strong>-ons</strong>, then add the imperfect endings: <span class=\"badge text-bg-light\">-ais</span> <span class=\"badge text-bg-light\">-ais</span> <span class=\"badge text-bg-light\">-ait</span> <span class=\"badge text-bg-light\">-ions</span> <span class=\"badge text-bg-light\">-iez</span> <span class=\"badge text-bg-light\">-aient</span>",
      formation_match_title: "Match the words",
      formation_match_description: "Match each pronoun with the correct ending.",
      formation_example: "<strong>Example:</strong> Nous parlons -> stem <strong>parl-</strong> -> Je <strong>parlais</strong>, Nous <strong>parlions</strong>.",
      choose_ending: "Choose ending",
      check_matches: "Check matches",
      quiz_title: "4. Quiz",
      quiz_description_1: "Answer all questions. You pass when your score is above 80%.",
      quiz_description_2: "This quiz checks meaning, usage, and -er verb imperfect formation.",
      quiz_q1_legend: "1. Which sentence best uses the imperfect?",
      quiz_q2_legend: "2. Ending for nous with an -er verb in imperfect?",
      quiz_q3_legend: "3. Which meaning fits imperfect best?",
      quiz_q3_option_a: "A repeated past routine",
      quiz_q3_option_b: "A single finished action",
      quiz_q4_legend: "4. Choose the best imperfect form for parler with il.",
      quiz_q5_legend: "5. Which context usually needs imperfect?",
      quiz_q5_option_a: "Describing weather during a past scene",
      quiz_q5_option_b: "A one-time completed purchase",
      submit_quiz: "Submit quiz",
      previous_section: "Previous section",
      next_section: "Next section",
      footer_note: "SCORM 1.2 prototype lesson, built entirely using an AI agent. See the full source files, skills and instructions on <a href=\"https://github.com/berthelemy/html-elearning-sample\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
      progress_status: "Progress: {current}/{total} sections",
      match_result_perfect: "Excellent. All matches are correct.",
      match_result_partial: "You got {correct} of {total}. Try again.",
      quiz_answer_all: "Please answer every question before submitting.",
      quiz_score_result: "Score: {score}%. Result: {result}.",
      quiz_result_pass: "Pass",
      quiz_result_fail: "Not yet passed",
    },
    es: {
      document_title: "Imperfecto en frances - CEFR A2",
      github_ribbon_label: "Ver codigo fuente en GitHub",
      github_ribbon_link: "Ver el codigo en GitHub",
      skip_to_content: "Saltar al contenido de la leccion",
      hero_eyebrow: "Gramatica francesa CEFR A2",
      hero_title: "Domina el imperfecto en frances",
      hero_subtitle: "Aprende cuando usarlo, como formarlo y evaluarte con un cuestionario final.",
      language_label: "Idioma",
      language_selector_aria: "Selector de idioma",
      language_option_en: "Ingles",
      language_option_es: "Espanol",
      lesson_sections_nav_label: "Secciones de la leccion",
      tab_intro: "Introduccion",
      tab_when_to_use: "Cuando usarlo",
      tab_how_to_form: "Como formarlo",
      tab_quiz: "Cuestionario",
      intro_title: "1. Introduccion",
      intro_description: "El imperfecto describe acciones repetidas, en progreso o descriptivas en el pasado. En esta leccion pasaras del reconocimiento a la produccion y despues completaras un cuestionario evaluado.",
      intro_goal_1: "Identificaras cuando el imperfecto es apropiado.",
      intro_goal_2: "Practicaras la formacion de verbos en -er en imperfecto.",
      intro_goal_3: "Completaras un cuestionario final con puntuacion y seguimiento SCORM.",
      intro_reveal_title: "Haz clic para revelar",
      intro_reveal_description: "Elige un contexto y revela si el imperfecto es adecuado.",
      intro_reveal_btn_1: "Habitos diarios en el pasado",
      intro_reveal_btn_2: "Evento unico completado",
      intro_reveal_btn_3: "Descripcion de contexto",
      intro_reveal_answer_1: "Si. Los habitos repetidos en el pasado suelen usar imperfecto.",
      intro_reveal_answer_2: "No. Un evento unico y completado suele usar passe compose.",
      intro_reveal_answer_3: "Si. El clima, las emociones y la descripcion del entorno suelen usar imperfecto.",
      when_title: "2. Cuando usar el imperfecto",
      when_description: "Usa el imperfecto para descripciones de fondo, estados en progreso y acciones repetidas en el pasado.",
      when_tip_1: "<strong>Consejo:</strong> preguntate si la accion era un habito repetido o un estado/contexto en progreso.",
      when_tip_2: "Si la respuesta es si, el imperfecto suele ser una buena primera opcion.",
      when_flip_title: "Tarjetas interactivas",
      when_flip_description: "Activa cada tarjeta para ver una frase de ejemplo.",
      flip_front_1: "Escena de fondo",
      flip_front_2: "Accion repetida",
      flip_front_3: "Sensacion continua",
      flip_front_4: "Accion interrumpida",
      formation_title: "3. Como formar el imperfecto para verbos en -er",
      formation_description: "Parte de la forma de <strong>nous</strong> en presente, quita <strong>-ons</strong> y luego agrega las terminaciones del imperfecto: <span class=\"badge text-bg-light\">-ais</span> <span class=\"badge text-bg-light\">-ais</span> <span class=\"badge text-bg-light\">-ait</span> <span class=\"badge text-bg-light\">-ions</span> <span class=\"badge text-bg-light\">-iez</span> <span class=\"badge text-bg-light\">-aient</span>",
      formation_match_title: "Relaciona las palabras",
      formation_match_description: "Relaciona cada pronombre con la terminacion correcta.",
      formation_example: "<strong>Ejemplo:</strong> Nous parlons -> raiz <strong>parl-</strong> -> Je <strong>parlais</strong>, Nous <strong>parlions</strong>.",
      choose_ending: "Elige terminacion",
      check_matches: "Comprobar respuestas",
      quiz_title: "4. Cuestionario",
      quiz_description_1: "Responde todas las preguntas. Apruebas cuando tu puntuacion supera el 80%.",
      quiz_description_2: "Este cuestionario evalua significado, uso y formacion del imperfecto en verbos en -er.",
      quiz_q1_legend: "1. Que frase usa mejor el imperfecto?",
      quiz_q2_legend: "2. Cual es la terminacion de nous para un verbo en -er en imperfecto?",
      quiz_q3_legend: "3. Que significado encaja mejor con el imperfecto?",
      quiz_q3_option_a: "Una rutina repetida en el pasado",
      quiz_q3_option_b: "Una accion unica ya terminada",
      quiz_q4_legend: "4. Elige la mejor forma en imperfecto de parler con il.",
      quiz_q5_legend: "5. En que contexto suele usarse el imperfecto?",
      quiz_q5_option_a: "Describir el clima en una escena del pasado",
      quiz_q5_option_b: "Una compra puntual ya completada",
      submit_quiz: "Enviar cuestionario",
      previous_section: "Seccion anterior",
      next_section: "Siguiente seccion",
      footer_note: "Leccion prototipo SCORM 1.2, creada completamente con un agente de IA. Consulta los archivos fuente, habilidades e instrucciones en <a href=\"https://github.com/berthelemy/html-elearning-sample\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
      progress_status: "Progreso: {current}/{total} secciones",
      match_result_perfect: "Excelente. Todas las relaciones son correctas.",
      match_result_partial: "Has acertado {correct} de {total}. Intentalo de nuevo.",
      quiz_answer_all: "Responde todas las preguntas antes de enviar.",
      quiz_score_result: "Puntuacion: {score}%. Resultado: {result}.",
      quiz_result_pass: "Aprobado",
      quiz_result_fail: "Todavia no aprobado",
    },
  };

  function normalizeLocale(locale) {
    if (!locale || typeof locale !== "string") {
      return null;
    }
    const lower = locale.toLowerCase().replace("_", "-");
    const baseLocale = lower.split("-")[0];
    if (SUPPORTED_LOCALES.includes(baseLocale)) {
      return baseLocale;
    }
    return null;
  }

  function loadPersistedLocale() {
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (stored && SUPPORTED_LOCALES.includes(stored)) {
        return stored;
      }
    } catch (error) {
      console.warn("Could not read language preference", error);
    }
    return null;
  }

  function persistLocale(locale) {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, locale);
    } catch (error) {
      console.warn("Could not save language preference", error);
    }
  }

  function interpolate(template, vars) {
    if (typeof template !== "string") {
      return "";
    }
    return template.replace(/\{(\w+)\}/g, function (_match, key) {
      return Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : "";
    });
  }

  let currentLocale = loadPersistedLocale() || DEFAULT_LOCALE;

  function t(key, vars) {
    const localeTable = translations[currentLocale] || translations[DEFAULT_LOCALE];
    const fallbackTable = translations[DEFAULT_LOCALE];
    const raw = Object.prototype.hasOwnProperty.call(localeTable, key)
      ? localeTable[key]
      : fallbackTable[key];
    return interpolate(raw, vars || {});
  }

  function applyTranslations() {
    document.documentElement.lang = currentLocale;
    document.title = t("document_title");

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (!key) {
        return;
      }
      element.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.getAttribute("data-i18n-html");
      if (!key) {
        return;
      }
      element.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      const attrMap = element.getAttribute("data-i18n-attr");
      if (!attrMap) {
        return;
      }

      attrMap.split(";").forEach((entry) => {
        const parts = entry.split(":");
        if (parts.length !== 2) {
          return;
        }
        const attrName = parts[0].trim();
        const key = parts[1].trim();
        if (attrName && key) {
          element.setAttribute(attrName, t(key));
        }
      });
    });
  }

  function setLocale(selection, options) {
    const config = Object.assign({ persist: false }, options);
    const resolved = normalizeLocale(selection) || DEFAULT_LOCALE;
    currentLocale = resolved;

    if (config.persist) {
      persistLocale(resolved);
    }

    applyTranslations();
  }

  const sectionIds = ["intro", "when-to-use", "formation", "quiz"];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const prevButton = document.getElementById("prev-section");
  const nextButton = document.getElementById("next-section");
  const statusChip = document.getElementById("lesson-status");
  const languageSelect = document.getElementById("language-select");
  const tabs = Array.from(document.querySelectorAll("[data-section-link]"));
  const sectionCompletion = {
    intro: false,
    whenToUse: false,
    formation: false,
    quiz: false,
  };

  let currentIndex = 0;

  function updateProgressChip() {
    if (statusChip) {
      statusChip.textContent = t("progress_status", {
        current: currentIndex + 1,
        total: sections.length,
      });
    }
  }

  function updateSectionVisibility(index, options) {
    const config = Object.assign({ updateHistory: true, historyMode: "replace", focus: true }, options);
    currentIndex = index;

    sections.forEach((section, sectionIndex) => {
      const isActive = sectionIndex === currentIndex;
      section.hidden = !isActive;
      if (isActive && config.focus) {
        try {
          section.focus({ preventScroll: true });
        } catch (_error) {
          section.focus();
        }
      }
    });

    tabs.forEach((tab, tabIndex) => {
      tab.classList.toggle("active", tabIndex === currentIndex);
      tab.setAttribute("aria-current", tabIndex === currentIndex ? "page" : "false");
    });

    updateProgressChip();

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

    if (config.updateHistory && history && history.replaceState) {
      const targetHash = `#${sectionIds[currentIndex]}`;
      if (config.historyMode === "push" && history.pushState && window.location.hash !== targetHash) {
        history.pushState(null, "", targetHash);
      } else {
        history.replaceState(null, "", targetHash);
      }
    }
  }

  if (languageSelect) {
    languageSelect.value = currentLocale;
    languageSelect.addEventListener("change", function () {
      const selected = languageSelect.value;
      setLocale(selected, { persist: true });
      if (languageSelect.value !== currentLocale) {
        languageSelect.value = currentLocale;
      }
      updateProgressChip();
    });
  }

  setLocale(currentLocale, { persist: false });

  function jumpToSection(id, options) {
    const index = sectionIds.indexOf(id);
    if (index >= 0) {
      updateSectionVisibility(index, options);
    }
  }

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      if (currentIndex > 0) {
        updateSectionVisibility(currentIndex - 1, { updateHistory: true, historyMode: "push", focus: true });
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      if (currentIndex < sections.length - 1) {
        updateSectionVisibility(currentIndex + 1, { updateHistory: true, historyMode: "push", focus: true });
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
      jumpToSection(hash.slice(1), { updateHistory: true, historyMode: "push", focus: true });
    });
  });

  window.addEventListener("popstate", function () {
    const id = window.location.hash ? window.location.hash.slice(1) : "";
    const index = sectionIds.indexOf(id);
    if (index >= 0) {
      updateSectionVisibility(index, { updateHistory: false, focus: false });
    } else {
      updateSectionVisibility(0, { updateHistory: false, focus: false });
    }
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
        matchResult.textContent = t("match_result_perfect");
        sectionCompletion.formation = true;
        if (window.lessonScorm) {
          window.lessonScorm.saveProgress({
            sectionCompletion: sectionCompletion,
          }, { commit: true });
        }
      } else {
        matchResult.textContent = t("match_result_partial", {
          correct: correct,
          total: Object.keys(answers).length,
        });
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
        quizResult.textContent = t("quiz_answer_all");
        return;
      }

      const score = Math.round((correct / Object.keys(key).length) * 100);
      const passed = score > 80;

      quizResult.className = `mt-4 result-box ${passed ? "pass" : "fail"}`;
      quizResult.textContent = t("quiz_score_result", {
        score: score,
        result: passed ? t("quiz_result_pass") : t("quiz_result_fail"),
      });

      sectionCompletion.quiz = true;

      if (window.lessonScorm) {
        window.lessonScorm.recordQuizResult(score, passed);
      }
    });
  }

  const hashId = window.location.hash ? window.location.hash.slice(1) : "";
  const hashIndex = sectionIds.indexOf(hashId);
  const hasHashTarget = hashIndex >= 0;

  if (window.lessonScorm) {
    window.lessonScorm.initialize();
    const saved = window.lessonScorm.loadProgress();
    if (saved && saved.sectionCompletion && typeof saved.sectionCompletion === "object") {
      Object.assign(sectionCompletion, saved.sectionCompletion);
    }
    if (hasHashTarget) {
      updateSectionVisibility(hashIndex, { updateHistory: false, focus: false });
    } else if (saved && Number.isInteger(saved.sectionIndex)) {
      updateSectionVisibility(Math.min(Math.max(saved.sectionIndex, 0), sections.length - 1), {
        updateHistory: false,
        focus: false,
      });
    } else {
      updateSectionVisibility(0, { updateHistory: false, focus: false });
    }
  } else {
    if (hasHashTarget) {
      updateSectionVisibility(hashIndex, { updateHistory: false, focus: false });
    } else {
      updateSectionVisibility(0, { updateHistory: false, focus: false });
    }
  }
})();
