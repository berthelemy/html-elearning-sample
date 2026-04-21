(function () {
  const STORAGE_KEY = "lesson-progress";

  function findScorm() {
    if (window.pipwerks && window.pipwerks.SCORM) {
      return window.pipwerks.SCORM;
    }
    return null;
  }

  const scormApi = findScorm();

  function getStoredData() {
    try {
      const text = localStorage.getItem(STORAGE_KEY);
      if (!text) {
        return {};
      }
      const parsed = JSON.parse(text);
      return typeof parsed === "object" && parsed ? parsed : {};
    } catch (error) {
      console.warn("Could not read local progress data", error);
      return {};
    }
  }

  function setStoredData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.warn("Could not persist local progress data", error);
    }
  }

  const lessonScorm = {
    initialize: function () {
      if (!scormApi) {
        return false;
      }

      const initialized = scormApi.init();
      if (!initialized) {
        return false;
      }

      const currentStatus = scormApi.get("cmi.core.lesson_status");
      if (!currentStatus || currentStatus === "not attempted") {
        scormApi.set("cmi.core.lesson_status", "incomplete");
        scormApi.save();
      }

      return true;
    },

    loadProgress: function () {
      if (scormApi) {
        const suspendData = scormApi.get("cmi.suspend_data");
        if (suspendData) {
          try {
            const parsed = JSON.parse(suspendData);
            setStoredData(parsed);
            return parsed;
          } catch (error) {
            console.warn("Invalid suspend_data format", error);
          }
        }
      }

      return getStoredData();
    },

    saveProgress: function (patch, options) {
      const config = Object.assign({ commit: false }, options);
      const current = getStoredData();
      const merged = Object.assign({}, current, patch);
      setStoredData(merged);

      if (!scormApi) {
        return;
      }

      const suspendData = JSON.stringify(merged);
      if (suspendData.length > 4096) {
        console.warn("suspend_data is larger than SCORM 1.2 limit");
        return;
      }

      scormApi.set("cmi.suspend_data", suspendData);
      if (typeof merged.sectionIndex === "number") {
        scormApi.set("cmi.core.lesson_location", String(merged.sectionIndex));
      }

      if (config.commit) {
        scormApi.save();
      }
    },

    recordQuizResult: function (score, passed) {
      this.saveProgress({ score: score, passed: passed }, { commit: false });

      if (!scormApi) {
        return;
      }

      scormApi.set("cmi.core.score.min", "0");
      scormApi.set("cmi.core.score.max", "100");
      scormApi.set("cmi.core.score.raw", String(score));
      scormApi.set("cmi.core.lesson_status", passed ? "passed" : "incomplete");
      scormApi.save();
    },

    finish: function () {
      if (scormApi) {
        const current = getStoredData();
        const suspendData = JSON.stringify(current);
        if (suspendData.length <= 4096) {
          scormApi.set("cmi.suspend_data", suspendData);
        }
        scormApi.save();
        scormApi.quit();
      }
    },
  };

  window.lessonScorm = lessonScorm;

  window.addEventListener("beforeunload", function () {
    lessonScorm.finish();
  });
})();
