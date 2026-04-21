---
name: front-end-javascript
description: "Expert front-end JavaScript implementation workflow for interactive web pages. Use for DOM behavior, event handling, state updates, async data loading, validation, debugging, and performance optimization in single-page or component-based UI work."
argument-hint: "Describe the UI behavior, data flow, browser targets, and performance/accessibility constraints."
---

# Front-End JavaScript Expertise

## What This Skill Produces
A robust front-end JavaScript implementation that is:
- Maintainable and modular
- Accessible and keyboard-friendly
- Resilient to runtime and network errors
- Efficient for real user interactions and page performance

## When to Use
Use this skill when you need to:
- Add or refactor interactive browser behavior
- Implement form logic, UI state, and async data flows
- Debug event bugs, race conditions, or rendering issues
- Improve performance and reliability of client-side code

## Inputs to Collect
Before implementation, gather:
1. User interaction goals and expected behaviors
2. Existing stack constraints (vanilla JS, jQuery, Bootstrap, SCORM wrappers)
3. Browser support requirements
4. Data sources and failure modes (API errors, timeouts, offline)
5. Accessibility and performance constraints

If details are missing, proceed with safe defaults and record assumptions.

## Workflow
1. Define behavior contract.
- List triggers (click, input, submit, load), expected state transitions, and success/failure outcomes.
- Write acceptance checks for each interaction.

2. Design state and boundaries.
- Separate DOM querying, state mutation, and rendering logic.
- Keep state minimal and explicit; avoid hidden cross-function coupling.

3. Implement events and rendering.
- Use event delegation for repeated/dynamic elements.
- Make handlers idempotent where practical.
- Update only the necessary DOM regions.

4. Add async and error handling.
- Wrap async operations with loading, success, and error UI states.
- Guard against double-submits, race conditions, and stale responses.
- Provide user-friendly fallback messaging.

5. Accessibility hardening.
- Ensure keyboard operation for interactive controls.
- Preserve visible focus indicators and semantic control roles.
- Announce dynamic status changes where appropriate.

6. Performance pass.
- Prevent unnecessary layout thrashing and repeated selectors.
- Debounce/throttle high-frequency events.
- Avoid memory leaks by cleaning listeners and timers.

7. Verify and finalize.
- Test behavior with realistic input and edge cases.
- Confirm console is clean of avoidable warnings/errors.
- Summarize assumptions, limitations, and follow-up risks.

## Decision Points
- If the behavior is mostly DOM orchestration: prefer small pure functions plus a thin DOM adapter.
- If many dynamic elements are created: prefer delegated events over per-node listeners.
- If async calls can overlap: use cancellation/sequence guards to prevent stale updates.
- If state complexity grows: extract a small state container instead of ad hoc globals.
- If compatibility is strict: avoid newer APIs unless polyfills are approved.

## Quality Gates (Completion Checks)
Consider the task complete only when all checks pass:
1. Correctness.
- All specified interactions match expected outcomes.

2. Reliability.
- Graceful handling for invalid input, network failures, and empty data.

3. Accessibility.
- Keyboard accessible controls, semantic HTML usage, visible focus, and meaningful status/error messaging.

4. Performance.
- No obvious redundant renders, listener explosions, or expensive event loops.

5. Maintainability.
- Clear function boundaries, readable names, and low coupling between modules.

## Default Implementation Pattern
- Cache stable DOM references once during setup.
- Centralize event wiring in one initializer function.
- Keep rendering in dedicated functions with deterministic outputs.
- Use constants for selectors, class names, and user-facing messages.
- Use progressive enhancement so core content remains available without JS.

## Output Expectations
When executing this skill, provide:
1. A concise implementation plan
2. The changed files and key logic summary
3. Assumptions and trade-offs
4. Verification results against the quality gates
