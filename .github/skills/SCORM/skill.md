# Skill: SCORM 1.2 Package Development & Optimization

## Context
This skill defines the architectural standards, technical constraints, and best practices for developing SCORM 1.2 compliant e-learning modules. SCORM 1.2 is the target environment, characterized by its 4,096-character suspend_data limit and specific API call requirements.

## Core Directives

### 1. Data Integrity & Suspend Data
- **Constraint:** `cmi.suspend_data` has a hard limit of 4,096 characters.
- **Action:** Implement data compression (Base64 or custom delimiters) for complex state tracking.
- **Action:** Modularize content into multiple SCOs (Sharable Content Objects) if the bookmarking requirements exceed the character limit.
- **Action:** Regularly audit the JSON object being stringified into suspend_data to remove redundant keys.

### 2. Manifest Structure (imsmanifest.xml)
- **Rule:** The `imsmanifest.xml` must reside in the absolute root of the ZIP package.
- **Rule:** Resource identifiers must be unique.
- **Rule:** All physical files (JS, CSS, HTML, Media) must be explicitly listed in the `<resources>` section to ensure LMS compatibility.
- **Naming:** Avoid spaces and special characters in file paths (use `_` or `-`).

### 3. API Communication Pattern
- **Initialization:** Always wrap `LMSInitialize("")` in a check to ensure the API is found.
- **Commit Strategy:** Call `LMSCommit("")` after high-value interactions (e.g., quiz completion, objective mastery) rather than on every page turn to reduce server overhead.
- **Termination:** Always call `LMSFinish("")` on the `unload` or `beforeunload` event of the window.

### 4. Tracking & Status Logic
- **Status Mapping:** - Use `cmi.core.lesson_status` values: `passed`, `completed`, `failed`, `incomplete`, `browsed`, `not attempted`.
  - For scored assessments: Prefer `passed/incomplete`.
  - For content-only modules: Prefer `completed/incomplete`.
- **Score:** Ensure `cmi.core.score.raw` is accompanied by `cmi.core.score.min` (0) and `cmi.core.score.max` (100).

### 5. Error Handling
- Use `LMSGetLastError()` and `LMSGetErrorString()` after failed `LMSSetValue` calls.
- Log errors to the browser console during development mode to identify "Silent Failures" where the LMS rejects data due to type-mismatch or character limits.

## Coding Standards (JavaScript)
- **API Discovery:** Use a standard "Algorithm to find the API Adapter" that searches up the window opener/parent chain (up to 10 levels).
- **Type Safety:** Ensure all values sent to `LMSSetValue` are strings. (e.g., `LMSSetValue("cmi.core.score.raw", String(scoreVar))`).

## Troubleshooting Workflow
1. **Validation:** Test the package in SCORM Cloud.
2. **Logs:** Check the `cmi.suspend_data` length.
3. **Manifest:** Verify that the `href` in the manifest points to the correct entry HTML file.