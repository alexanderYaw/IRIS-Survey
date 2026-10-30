# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Sterile processing (CSSD) staff at Singapore hospitals: technicians, supervisors and managers, plus some nurses and others. The link reaches them through a contact or supervisor at their hospital. They open it on a hospital computer or on their own phone, often in a short break, and take part voluntarily. They know instrument sets, trays and sterilisation well; they do not know IRIS, and they are not designers or usability testers. English is the study language.

The study team (Alexander Yaw, NUS) is the second audience: they set up the sheet, publish the page and read the answers.

## Product Purpose

An anonymous survey of about 10 minutes that collects CSSD staff opinions on IRIS, a robot arm that sorts used surgical instruments from a tray into their positions in the set tray so staff only check the result. The participant gives consent, states their position and years in it, watches a side-by-side video of the operator screen and the arm, completes four tasks on a clickable prototype of a proposed operator screen, rates it on two UMUX-Lite statements, and answers three questions about IRIS in their work.

The answers serve both an academic write-up and decisions about what to change in IRIS and its operator screen. Success is complete, honest responses from real CSSD staff, including the problems they hit; a participant finishing the survey without confusion or drop-off.

## Positioning

The study is run by the team that built IRIS. The welcome screen does not say so (the study team removed that line); it tells participants the design is being evaluated, not their performance, and that positive and negative feedback are equally welcome. It tests a proposed operator screen with the people who would use it, at four real moments of the job (tray arrival, an extra instrument, a near collision, the final sterilisation decision), rather than asking for general opinions about automation.

## Operating Context

- Distributed as a public GitHub Pages link, asking search engines not to list it.
- Answers go to a Google Sheet through a Google Apps Script web app (`apps-script.gs`); `CONFIG` at the top of the `index.html` script holds the web app URL and the contact.
- Answers are kept in the participant's browser (localStorage) until sent, cleared by the participant, or 8 hours old, so a reload does not lose them; duplicate sends are stored once. Hospital computers may be shared: unfinished answers are never resumed without the welcome screen and a fresh consent.
- Each task opens `prototype.html` at a set state in a full-screen dialog with the task prompt, "Start the task again" and "Return to questions".
- The prototype works best on a computer or tablet; on a phone participants are asked to turn it sideways.

## Capabilities and Constraints

- Static site: plain HTML, CSS and JavaScript, no build step, everything in the repository root is published.
- `prototype.html` is the study's adapted copy of `design-demos/dir-2.html` from the IRIS repo. Study changes so far: task 2's extra-instrument mode (`#ready&extra`), revised chat replies, the two scalpel handles named "No. 3 handle" and "No. 3L handle", "Look again" as the highlighted action when an instrument is not found, and, in task 2, a yellow outline on the chat with a tip that IRIS has an intelligent agent that understands changes to the sorting procedure (gone once the participant types, sends or presses "Got it"). It is what participants test, so it changes only when the study team asks for a specific change; design work on the survey page never restyles it as a side effect.
- The videos (`videos/DashboardDemoCut.mp4`, the operator's screen; `videos/RobotArmSorting.mp4`, the robot arm) are study material, both recorded at real speed. The page plays them side by side and in sync: the arm waits on its 5 s frame until the screen reaches 23 s, then runs 18 s behind it; both play at 2.5×, except the screen's first and last 5 seconds. The arm is muted. Together they are about 49 MB, heavy on mobile data.
- Question wording, answer options, task prompts and the UMUX-Lite statements are study instruments. Changing them changes the data; treat any wording change as a study decision for the team, not a copy edit.
- Stored per participant: arrival time, random response ID, position, years in position, answers, minutes taken. No name, email, IP address or device details. The consent screen says only that names and email addresses are not collected and that responses are anonymous, explains that unsent answers stay in the browser for up to 8 hours, and states the time needed, that the design (not the participant) is being evaluated, that taking part is voluntary, and the contact. Whether consent must list the stored data in full is the study team's decision under their ethics approval.
- Terminology: IRIS, CSSD, sterile processing, set tray, sterilisation (British spelling), operator's screen.

## Brand Commitments

- Name: "IRIS sorting study".
- Voice: plain, short, direct English; second person; no jargon beyond the participant's own trade terms; honest about what the study is (voluntary, anonymous, not connected to a robot, run by the IRIS team).

## Evidence on Hand

- The operator-screen and robot-arm videos in `videos/`.
- The clickable prototype.
- No results, participant counts, quotes, or endorsements exist yet. Do not invent any, and do not imply hospital or NUS endorsement beyond the named contact.

## Product Principles

1. Protect the data: never change what a question asks or how it is answered as a side effect of design work.
2. Keep the participant moving: every screen should be quick to understand for a busy CSSD worker on a hospital PC or a phone, so they finish.
3. Make honesty easy: the page invites criticism of IRIS and should never feel like a sales pitch for it.
4. Collect nothing beyond the stored list above: no name, email, IP address or device details.

## Accessibility & Inclusion

Participants range widely in age and comfort with computers, and use shared hospital PCs and their own phones on mobile data. The survey must work by keyboard and screen reader, on small screens, and on slow connections (the video is the heaviest asset). No specific standard has been set beyond this.
