---
name: IRIS sorting study
description: A calm, plain survey page that asks sterile processing staff for honest criticism of IRIS.
colors:
  scrub-green: "#1e6a56"
  scrub-tint: "#e1eee8"
  on-scrub: "#ffffff"
  clinic-mist: "#f5f7f5"
  surface: "#ffffff"
  ink: "#16201c"
  ink-muted: "#4b5752"
  hairline: "#d6ddd9"
  field-line: "#7f8a85"
  rust-alert: "#8a3b12"
  prototype-backdrop: "#e4e1da"
  scrub-green-dark: "#63c3a3"
  scrub-tint-dark: "#1b2f28"
  on-scrub-dark: "#0b1411"
  clinic-mist-dark: "#101614"
  surface-dark: "#19211e"
  ink-dark: "#e7ede9"
  ink-muted-dark: "#a8b4af"
  hairline-dark: "#2c3833"
  field-line-dark: "#66756e"
  rust-alert-dark: "#ffb48a"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(28px, 5vw, 40px)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  lede:
    fontFamily: "Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  prompt:
    fontFamily: "Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.35
  note:
    fontFamily: "Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.04em"
  button:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1
rounded:
  bar: "3px"
  control: "10px"
  card: "12px"
spacing:
  tile-gap: "8px"
  in-question: "10px"
  gutter: "16px"
  block: "20px"
  between-questions: "32px"
  section-break: "40px"
components:
  button-primary:
    backgroundColor: "{colors.scrub-green}"
    textColor: "{colors.on-scrub}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-primary-big:
    backgroundColor: "{colors.scrub-green}"
    textColor: "{colors.on-scrub}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "60px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  answer-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
    height: "52px"
  answer-tile-selected:
    backgroundColor: "{colors.scrub-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  text-box:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  info-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px 20px"
  task-card:
    backgroundColor: "{colors.scrub-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.prompt}"
    rounded: "{rounded.card}"
    padding: "18px 20px"
  progress-bar:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.bar}"
    height: "6px"
---

# Design System: IRIS sorting study

## Overview

**Creative North Star: "The Quiet Interview"**

The page is a respectful conversation with people who know instrument sets better than its authors do. It asks one thing at a time, explains exactly what happens to the answers, and invites criticism without ever selling IRIS. Nothing on screen competes with the question being asked: one green carries every next step, and everything else is ink on a pale, near-white ground.

Density is comfortable and generous, never cramped: participants may be on a shared hospital PC in a short break or on their own phone, so targets are large (52px and up), text is set in a face built for legibility, and each screen is a single column that reads top to bottom. The controls are sturdy and plain: flat surfaces, clear borders, no decoration.

**Key Characteristics:**
- One accent, Scrub Green, used only for the next action, progress and selection.
- Flat throughout: no shadows; separation comes from borders and tinted surfaces.
- Archivo for headings, questions and buttons; Atkinson Hyperlegible for everything people read.
- Big, square-ish rounded targets (10px corners, 52px minimum height).
- Light and dark themes from the same roles.

## Colors

A restrained palette: one green carries every action, against cool, slightly green-tinted neutrals.

### Primary
- **Scrub Green** (scrub-green): primary buttons, the progress bar fill, the uppercase step label, focus rings, and the border of a selected answer. In dark mode it lightens to scrub-green-dark so it still reads as the action color.
- **Scrub Tint** (scrub-tint): the background of a selected answer tile, the task card and the unfinished-answers notice. It marks "this is the current thing" without shouting.

### Neutral
- **Clinic Mist** (clinic-mist): the page background, a cool off-white so white tiles and boxes sit visibly on it.
- **Surface** (surface): answer tiles, text boxes, the consent card and the task bar above the prototype.
- **Ink** (ink): headings, questions, answers and body text.
- **Muted Ink** (ink-muted): ledes, notes, scale-end labels and the step count. Still 7:1 on Clinic Mist.
- **Hairline** (hairline): borders of tiles and cards, the empty progress track, dividers.
- **Field Line** (field-line): text-box borders only, dark enough (3:1) that an empty box can be seen.
- **Rust Alert** (rust-alert): error messages, in bold.
- **Prototype Backdrop** (prototype-backdrop): behind the embedded prototype; it matches the prototype's own background and does not change in dark mode, because the prototype is always light.

### Named Rules
**The One Green Rule.** Scrub Green marks only the next action, progress and the current selection. A second green button on the same screen means one of them should be quiet.

**The Prototype Is Not Ours Rule.** The embedded operator screen keeps its own colors. The study's chrome around it never borrows them, and never restyles the prototype.

## Typography

**Display Font:** Archivo (with system-ui, -apple-system, Segoe UI)
**Body Font:** Atkinson Hyperlegible (with system-ui, -apple-system, Segoe UI)

**Character:** Archivo gives headings, questions and buttons a sturdy, practical voice; Atkinson Hyperlegible, designed for low-vision readers, makes every sentence easy to read for staff of all ages. Its slashed zero is expected.

### Hierarchy
- **Display** (700, clamp(28px, 5vw, 40px), 1.1): the h1 on the welcome, thank-you and cleared screens only.
- **Headline** (600, 26px, 1.2): each screen's h2, including task titles.
- **Title** (600, 19px, 1.35): every question (legends and question labels).
- **Prompt** (700, 21px, 1.35): the task instruction in the task card; the task bar repeats it at 17px.
- **Lede** (400, 19px, Muted Ink): the opening sentence under a heading, max 62ch.
- **Body** (400, 18px, 1.55): answers, card text, text-box input.
- **Note** (400, 15px, Muted Ink): "(optional)", hints, the stop link line.
- **Label** (600, 13px, 0.04em, uppercase, Scrub Green): the step name above the progress bar and the task label in the task bar. Nowhere else.

### Named Rules
**The Readable Floor Rule.** Nothing anyone needs to read is smaller than 15px; inputs stay at 18px so phones do not zoom in.

## Layout

One centered column, 760px wide, with a 16px side gutter that respects the phone's safe areas. The video screen widens to 1240px so the side-by-side video is legible, and the progress header widens with it so their left edges line up; its question still keeps the 760px measure. One screen is shown at a time, with a sticky progress header above it and a "Stop and clear my answers" line below it, separated by a hairline 40px down.

Spacing has a deliberate rhythm: 8px between answer tiles, 10px inside a question, 20px between blocks on a screen, 32px between questions, 16px above the Back/Next row. Back sits left and the main action right. Under 560px, the duration options become a 2×2 grid, the 7-point scale tightens to 4px gaps and the video labels stack.

The task view is a full-screen layer: a task bar on top, the prototype below. On a phone held upright (≤700px wide), the prototype is covered by a "Turn your phone sideways" message; on a short screen (≤500px tall), the task text shrinks to one line with a "Read full task" toggle.

## Elevation & Depth

Flat. There are no shadows anywhere on the study page; depth comes from a white surface on Clinic Mist, a 1–1.5px border, or a Scrub Tint background. The only layering is the full-screen task view, which sits over the page and makes everything behind it inert.

### Named Rules
**The Flat Form Rule.** Separate with a border or a tint, never a shadow. The prototype's own raised controls are its business.

## Shapes

Gently squared corners: 10px on every control (buttons, answer tiles, text boxes), 12px on cards (consent card, task card, notice), 3px on the progress bar. Borders are 1.5px on controls and 1px on cards and dividers. The quiet button draws its border as an inset 1.5px Hairline line so it lines up with the primary button's edge.

## Components

### Buttons
Sturdy and plain.
- **Shape:** 10px corners, 52px tall (60px for the screen's single most important action: Start, Open the screen, Send my answers), 22px side padding, Archivo 600 at 17px (19px when big).
- **Primary:** Scrub Green with white text (dark ink text in dark mode). One per screen state.
- **Quiet:** transparent with Ink text and a 1.5px Hairline inset border. Used for Back, Start again, Start the task again and Open the screen again.
- **Focus:** a 3px Scrub Green outline, 3px offset. **Disabled:** 50% opacity, used while sending.
- **Text link button:** underlined Ink text, 44px tall, for "Stop and clear my answers".

### Answer tiles
The whole tile is the target: a white tile, 52px minimum height, 1.5px Hairline border, 10px corners, a 20px native radio or checkbox in Scrub Green, and the answer text. Selected tiles take a Scrub Green border on Scrub Tint. Lists stack with 8px gaps; short options sit in rows (min 120px each). The 7-point rating scale is seven 64px tiles with the number centered (56px on phones) and the end labels underneath.

### Text boxes
White, 1.5px Field Line border, 10px corners, 12px 14px padding, 18px text. Multi-line boxes start at 88px and grow vertically. The "Other" boxes appear under their option with a small visible label.

### Cards
- **Info card:** white, 1px Hairline border, 12px corners, 18px 20px padding: the consent bullet list, the tasks intro.
- **Task card / notice:** Scrub Tint, no border, 12px corners, 18px 20px padding: the task prompt with its Open button, and the unfinished-answers notice with Start again.

### Progress header
Sticky. The step name as an uppercase Scrub Green label on the left, "Step N of 9" in Muted Ink on the right, and a 6px bar underneath that fills by steps finished.

### Task view (signature component)
A full-screen layer over the page: a white task bar with the task label and prompt on the left and Read full task / Start the task again / Return to questions on the right, and the prototype filling the rest on Prototype Backdrop. Escape returns to the questions from anywhere, including inside the prototype.

## Do's and Don'ts

### Do:
- **Do** keep one Scrub Green action per screen state; make every other button quiet.
- **Do** keep controls at least 52px tall (44px for the text link) and text at 15px or larger.
- **Do** separate with Hairline borders and Scrub Tint, not shadows.
- **Do** use Field Line, not Hairline, for text-box borders.
- **Do** define every new color as a role on `:root` with a dark-mode value.

### Don't:
- **Don't** add shadows, gradients or decoration to study controls.
- **Don't** restyle or recolor the embedded prototype.
- **Don't** use the uppercase label style above a heading; it is reserved for the progress header and the task bar.
- **Don't** let the page read like marketing for IRIS: no hero imagery, badges or promotional color.
