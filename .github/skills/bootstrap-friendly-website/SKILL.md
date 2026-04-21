---
name: bootstrap-friendly-website
description: "Build modern, friendly Bootstrap 5 websites with clear visual hierarchy, approachable colors, accessible components, and responsive layouts. Use when creating landing pages, marketing pages, learning pages, or small multi-section websites."
argument-hint: "Describe the page goal, audience, required sections, preferred color mood, and any brand constraints."
---

# Bootstrap Friendly Website

## What This Skill Produces
A project-scoped, complete, production-ready single Bootstrap 5 page with:
- A modern, friendly visual direction
- Responsive layout for mobile and desktop
- Accessible, semantic HTML and keyboard-friendly interactions that meet WCAG 2.1 AA
- Clear section structure and reusable component patterns
- A fixed design system (palette + typography) defined below

## When to Use
Use this skill when you need to:
- Build a new Bootstrap website quickly with polished UI
- Refresh an outdated page into a modern, approachable design
- Create educational or marketing content with strong readability
- Generate consistent section patterns (hero, features, cards, CTA, footer)

## Inputs to Collect
Before implementation, gather:
1. Primary goal of the page (inform, convert, teach, onboard)
2. Target audience and tone (professional, playful, calm, energetic)
3. Required sections and content priorities
4. Technical constraints (single file, framework limits, no build tools)

If input is incomplete, proceed with sensible defaults and list assumptions.

## Hard Requirements
- Scope: this skill is project-scoped and intended for use inside this repository.
- Output shape: generate one single-page website only (no multi-page output).
- Accessibility: every generated result must satisfy WCAG 2.1 AA.

## Fixed Design System
Use this exact baseline unless the user explicitly asks to override it.

Palette:
- `--bg`: `#f6fbf8`
- `--surface`: `#ffffff`
- `--surface-muted`: `#e8f4ee`
- `--text`: `#163027`
- `--text-muted`: `#406156`
- `--primary`: `#2f7a5f`
- `--primary-strong`: `#1f5d46`
- `--accent`: `#f2b84b`
- `--border`: `#cfe3d9`

Typography direction:
- Headings: `Fraunces`, `Georgia`, `serif`
- Body/UI: `Source Sans 3`, `Trebuchet MS`, `sans-serif`
- Use 1.5-1.8 line-height for body text and avoid dense paragraphs.

## Workflow
1. Define structure first.
- Draft a clear section map: hero, trust/value section, content blocks, CTA, footer.
- Keep navigation simple and predictable.

2. Establish a visual system.
- Create CSS variables for color, spacing, radius, and shadows.
- Apply the fixed palette and typography from this skill.
- Prefer generous spacing and moderate corner radius for approachable UI.

3. Build semantic, responsive HTML with Bootstrap.
- Use containers, responsive grid, and utility classes intentionally.
- Use semantic landmarks: header, nav, main, section, footer.
- Ensure logical heading order and readable line lengths.

4. Add purposeful component styling.
- Improve default Bootstrap look with custom classes for hero, cards, and buttons.
- Keep component variants limited and consistent.
- Add clear hover/focus states; never remove visible focus outlines.

5. Add lightweight motion.
- Use subtle entrance or stagger effects for key sections.
- Keep duration short and non-distracting.
- Respect reduced-motion preferences.

6. Verify quality and refine.
- Check spacing rhythm, alignment, and typographic hierarchy.
- Test mobile first, then tablet and desktop.
- Confirm contrast and keyboard navigation.

## Decision Points
- If audience is learning-focused: prioritize readability, chunked content, and supportive callouts.
- If audience is conversion-focused: prioritize social proof, concise benefits, and a prominent CTA.
- If the request conflicts with fixed design tokens: ask whether to keep the skill defaults or explicitly override them.
- If implementation must stay lightweight: avoid heavy dependencies beyond Bootstrap and optional minimal JS.

## Quality Gates (Completion Checks)
Consider the task complete only when all checks pass:
1. Layout integrity.
- No broken wrapping, overlap, or clipping from small to large screens.

2. Visual hierarchy.
- Headings, body text, and CTA prominence are clearly distinguishable.

3. WCAG 2.1 AA compliance.
- Verify color contrast (including interactive states), keyboard-reachable controls, visible focus styles, semantic landmarks, meaningful alt text, logical reading order, and appropriate form labels/error messaging.

4. Consistency.
- Reused spacing scale, radius, shadows, and button styles across sections.

5. Performance sanity.
- No unnecessary libraries or oversized assets for simple interactions.

## Default Implementation Pattern
- Bootstrap 5 CDN for layout and base components
- `styles.css` for design tokens and custom component styling
- `script.js` only for necessary interactivity
- Single-page structure with anchored in-page navigation where needed
- Progressive enhancement: page remains usable without JS

## Output Expectations
When executing this skill, provide:
1. A concise implementation plan
2. The generated/updated files
3. A short assumptions list
4. A verification summary against the quality gates
