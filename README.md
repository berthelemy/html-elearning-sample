# French Imperfect Tense SCORM Module (CEFR A2)

This project is a single-page SCORM 1.2 e-learning lesson that teaches when and how to use the French imperfect tense.

It includes:
- Introduction section
- Usage rules section
- -er verb formation section
- Final multiple-choice quiz

Learner interactions:
- Click to reveal
- Flip cards
- Match words
- Multiple-choice quiz

Scoring rule:
- Pass is awarded only when quiz score is greater than 80%.

## Tech Stack
- HTML, CSS, JavaScript
- Bootstrap 5 (CDN)
- Pipwerks SCORM API wrapper
- SCORM 1.2 manifest packaging

## Project Structure
- `index.html` - lesson content and section layout
- `styles.css` - visual system and responsive styling
- `script.js` - interactions, navigation, quiz scoring
- `scorm.js` - SCORM lifecycle and tracking adapter
- `imsmanifest.xml` - SCORM 1.2 manifest
- `assets/scorm_api_wrapper.js` - pipwerks SCORM wrapper
- `dist/french-imperfect-a2-scorm12.zip` - packaged artifact

## How To Run Locally
No build step is required.

1. Open `index.html` in a browser.
2. Navigate through all sections using top buttons and Previous/Next controls.
3. Complete the matching activity and quiz.
4. Confirm quiz feedback appears and pass/fail reflects the >80% rule.

## How To Test

### 1. Functional Testing (Browser)
Run these checks manually:
- Section navigation works from all nav controls.
- Click-to-reveal toggles the expected explanation text.
- Flip cards reveal back-side examples.
- Matching activity reports correct/incorrect outcomes.
- Quiz requires all answers before scoring.
- Quiz result shows score percentage and pass/fail.

### 2. Accessibility Testing (WCAG 2.1 AA Baseline)
Validate:
- Keyboard-only operation for all interactive controls.
- Visible focus indicators on buttons, links, and form controls.
- Logical heading hierarchy and landmark navigation.
- Sufficient color contrast for text and control states.
- Status/feedback text announced via aria-live regions.

### 3. SCORM Testing (SCORM Cloud)
1. Upload `dist/french-imperfect-a2-scorm12.zip` to SCORM Cloud.
2. Launch the module and complete at least one attempt.
3. Verify LMS tracking values:
- `cmi.core.lesson_status` updates to `incomplete` or `passed`
- `cmi.core.score.raw`, `cmi.core.score.min`, `cmi.core.score.max` are recorded
- `cmi.suspend_data` and lesson location are saved
4. Close and relaunch to confirm resume/bookmark behavior.

## Packaging Notes
- `imsmanifest.xml` must stay at the package root.
- Ensure every referenced asset is listed in the manifest `<resources>` section.
- Keep SCORM paths lowercase and without spaces.

## Troubleshooting
- If SCORM values do not persist, verify the wrapper loads before `scorm.js`.
- If LMS import fails, validate `imsmanifest.xml` and resource paths.
- If resume fails, inspect suspend data size and console warnings.
