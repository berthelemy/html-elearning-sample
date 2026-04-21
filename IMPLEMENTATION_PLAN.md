# SCORM French Imperfect Module Implementation Plan

## Objectives
- Build a SCORM 1.2 package to teach CEFR A2 learners the French imperfect tense.
- Deliver one learner-friendly single-page lesson flow with four required sections and a scored final quiz.
- Meet WCAG 2.1 AA accessibility requirements and SCORM tracking requirements.

## Scope And Success Criteria
- Required sections:
  1. Introduction
  2. When to use the imperfect tense
  3. How to form imperfect tense for -er verbs
  4. Final quiz
- Required interaction types:
  - Click to reveal
  - Flip cards
  - Match words
  - Multiple choice quiz
- Pass criteria:
  - Learner passes when final quiz score is above 80%
- Navigation:
  - Learner can freely jump between sections and move previous/next
- Compliance:
  - SCORM 1.2 API lifecycle (initialize, set values, commit, finish)
  - WCAG 2.1 AA checks completed before release

## Proposed File Structure
- index.html
- styles.css
- script.js
- scorm.js
- imsmanifest.xml
- assets/

## Phase 1: Foundation Setup
1. Create base files and semantic page skeleton.
2. Add Bootstrap 5 and baseline design tokens.
3. Implement section anchors and previous/next controls.
4. Add placeholder content for each required section.

Definition of done:
- Page loads without errors.
- All sections are reachable via navigation.
- Layout is responsive on mobile and desktop.

## Phase 2: Learning Interactions
1. Implement click-to-reveal examples for tense usage contexts.
2. Implement flip cards for pronoun-to-form memorization.
3. Implement matching activity for subjects and conjugations.
4. Add state reset logic for each activity.

Definition of done:
- Each interaction works with keyboard and pointer input.
- Each interaction has clear visual and textual feedback.

## Phase 3: Quiz And Scoring
1. Build multiple choice quiz with deterministic answer key.
2. Compute score as percentage from correct answers.
3. Render result summary with pass/fail status.
4. Enforce pass condition only when score is greater than 80.

Definition of done:
- Quiz score is correct across normal and edge cases.
- Pass/fail state matches threshold rule exactly.

## Phase 4: SCORM Integration
1. Add SCORM adapter wrapper around pipwerks API.
2. Initialize SCORM session on load and validate API availability.
3. Track lesson status, score raw/min/max, and completion events.
4. Commit on high-value events (quiz completion and section completion).
5. Finish session safely on unload.

Definition of done:
- Module records score and status in SCORM Cloud.
- No SCORM API errors in runtime logs.

## Phase 5: Accessibility And QA
1. Verify heading hierarchy, landmarks, labels, and focus order.
2. Validate keyboard operation for all controls and interactions.
3. Check color contrast, feedback messaging, and error clarity.
4. Test responsive behavior and browser sanity checks.

Definition of done:
- WCAG 2.1 AA checks pass for key flows.
- No critical usability blockers remain.

## Phase 6: Packaging And Release
1. Create imsmanifest.xml with valid organization and resources.
2. Ensure all assets are listed in manifest resources.
3. Build ZIP package with imsmanifest.xml at root.
4. Run final import and launch test in SCORM Cloud.

Definition of done:
- Package imports successfully and runs end-to-end.
- Tracking, scoring, and completion are stored correctly.

## Delivery Milestones
- Milestone 1: Foundation + interactions complete.
- Milestone 2: Quiz + scoring complete.
- Milestone 3: SCORM tracking complete.
- Milestone 4: Accessibility QA + packaged release complete.

## Risk Register
- SCORM tracking failures due to API initialization issues.
- Accessibility gaps in custom interactions.
- Score/status mismatch between UI logic and SCORM values.
- Manifest/resource mismatch causing LMS import errors.

## Mitigations
- Validate frequently in SCORM Cloud during development, not only at the end.
- Keep interaction logic modular and test each component in isolation.
- Add explicit logging around scoring and SCORM status writes.
- Run a manifest/resource checklist before packaging.
