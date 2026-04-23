# Project Guidelines

## Scope
- This repository builds a SCORM 1.2 learning module for CEFR A2 French imperfect tense.
- Follow the product and pedagogical requirements in [requirements.md](../requirements.md).
- Reuse project skills when relevant:
  - [SCORM skill](./skills/SCORM/SKILL.md)
  - [Bootstrap website skill](./skills/bootstrap-friendly-website/SKILL.md)
  - [Front-end JavaScript skill](./skills/front-end-javascript/SKILL.md)

## Architecture
- Prefer a single-page lesson application with section-based navigation and a final quiz.
- Keep concerns separated:
  - Content and structure in HTML
  - Visual system and responsive layout in CSS
  - Interaction logic and scoring in JavaScript
  - SCORM API and LMS state logic in a dedicated adapter module
- Keep files and paths SCORM-safe: lowercase names, no spaces, and simple relative paths.

## Build And Test
- No build tooling is required unless explicitly introduced.
- Validate changes by opening the page in a browser and checking interaction behavior.
- Validate SCORM compliance in SCORM Cloud before considering packaging complete.
- Rebuild the SCORM zip package after every content or code change so deliverables always match the latest source.
- If packaging is needed, ensure imsmanifest.xml is at package root and all referenced assets are included.

## Conventions
- Use Bootstrap 5 for layout/components and JavaScript for behavior.
- Accessibility is required: target WCAG 2.1 AA for all learner-facing interactions.
- Quiz scoring must map to pass threshold above 80% and update SCORM lesson status.
- Prefer progressive enhancement: core learning content remains usable if JavaScript fails.
- Add concise comments only for non-obvious logic (state transitions, scoring, SCORM lifecycle).

## Delivery Expectations
- For feature work, include:
  - What changed
  - How it was validated
  - Any assumptions or unresolved risks
- For complex changes, propose tests/checks before implementation and report outcomes after.
