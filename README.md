# IRIS sorting study

A one-page survey for sterile processing (CSSD) staff, about 12 minutes:
a welcome page that explains where IRIS would fit and the operator's part in
it, consent, position, a side-by-side video of IRIS, two tasks on the
clickable prototype (each followed by questions and 0-10 ratings), a third task
that reviews a labelled result photo, two rating statements (UMUX-Lite) and
four questions about their work. Answers go to a
Google Sheet; the page does not ask for a name or email address.

| File | What it is |
| --- | --- |
| `index.html` | The survey page |
| `prototype.html` | The clickable operator screen (`design-demos/dir-2.html` from the IRIS repo, with a study version of the chat; see "Task 2" below) |
| `side-by-side.mp4`, `side-by-side-poster.jpg` | The video: operator screen and robot arm, 1.5× speed, no sound (the page plays its first and last 5 seconds at normal speed) |
| `review-photo.jpg`, `review-photo-narrow.jpg` | Task 3's labelled result photo (wide, and the phone layout), rendered from `prototype.html#result&mislabel&clean` |
| `apps-script.gs` | Receives answers and writes them to the sheet |

## 1. Answer sheet (Google Sheet)

1. In Google Drive, create a new Google Sheet, for example "IRIS study answers".
   Use a personal Google account if an NUS account does not allow web apps
   that anyone can reach.
2. In the sheet, open **Extensions > Apps Script**. Delete what is there,
   paste the contents of `apps-script.gs`, and save.
3. **Deploy > New deployment**, type **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Approve the permissions Google asks for, then copy the **Web app URL**
   (it ends in `/exec`).
5. Open that URL in a browser. It should say "IRIS study answer sheet is running."

A "Responses v3" tab with column headers appears with the first answer. A
response sent twice (for example after a poor connection) is stored once.

If you change `apps-script.gs` later, use **Deploy > Manage deployments >
Edit > New version**, so the URL stays the same. When the columns change (as
in version 2, which added the per-task ratings), the script writes to a new
tab with its own header; delete the old tab once it holds only test rows.

## 2. Settings in the page

At the top of the script in `index.html`, fill in `CONFIG`:

```js
const CONFIG = {
  responseUrl: "https://script.google.com/macros/s/.../exec",
  contact: "Name, email@example.com",
};
```

Until `responseUrl` is set, the last screen says answers cannot be sent yet.

## 3. Publish with GitHub Pages

1. On GitHub, create a new **public** repository, for example `iris-study`.
   (GitHub Pages on a free account needs a public repository.)
2. Add the files in this folder at the top level of the repository, either
   with **Add file > Upload files** in the browser, or with git:

   ```sh
   cd ~/iris-study-site
   git init -b main
   git add .
   git commit -m "IRIS sorting study"
   git remote add origin https://github.com/<your-username>/iris-study.git
   git push -u origin main
   ```

3. In the repository: **Settings > Pages > Build and deployment > Source:
   Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. After a minute or two the page is at
   `https://<your-username>.github.io/iris-study/`.

To update the site later (for example after filling in `CONFIG`), upload or
push the changed files; Pages republishes within a minute or two.

The page is public: anyone with the link can open it and watch the video. It
asks search engines not to list it. Every file in the folder is published,
including this README and `apps-script.gs`; neither holds anything secret.

## 4. Check before sending it out

- Open the link on a hospital computer and on a phone with mobile data.
- Go through the whole survey once and press Send; check that a row appears
  in the sheet. Delete that test row afterwards.
- Note how long it took (the sheet records `minutes_taken`).

## Task 2: the extra instrument

Task 2 opens `prototype.html#ready&extra&clean`. In this mode the set has four
instruments, and the No. 3L handle is an extra instrument on the tray.
The chat answers by matching keywords; it is not a language model.

| Message, for example | IRIS answers | List | Result photo |
| --- | --- | --- | --- |
| "Please sort the extra instrument", "add it", "do not leave it, sort it" | It will sort it, and has added it for slot 5 | 5 instruments | Full photo, 5 instruments |
| "Don't sort it", "leave it on the tray", "I will remove it by hand" | It will not sort it; remove it by hand | 4 instruments | A photo of the tray without the large handle (`SortedWithout3L.jpg` from `design-demos`, embedded in the page), with 4 labels |
| "There is an extra instrument" (no instruction) | Names it and asks whether to sort it or leave it; "yes" or "no" then answers | unchanged | |
| Anything else | Asks what is different about the tray | unchanged | |

Pressing Start sorting without using the chat sorts the four and shows the
photo without the large handle. A message that mixes instructions in an unusual way can get the
wrong answer, so read the `t2_note` answers with that in mind.

In the other tasks the chat gives a short fixed reply (in task 1, while the
missing-instrument question is open, it points to Look again and Sort without it).

## Task 3: the mislabelled result

Task 3 shows a picture of the result screen instead of opening the prototype:
`review-photo.jpg` (`review-photo-narrow.jpg` on screens 560 px wide or less).
The photo is correct, but the name cards for slots 2 and 4 are swapped on
purpose: the tissue forceps are labelled "Artery forceps, Slot 2" and the artery
forceps "Tissue forceps, Slot 4". The task does not mention this. `t3_result`
("what can you conclude about this set?") shows whether the participant noticed.

The next screen then says the two labels were wrong on purpose and asks the two
ratings `t3_spot` and `t3_confidence`. It has no Back button, so the answer in
`t3_result` stays as it was given before the error was shown.

To render the pictures again after changing the prototype, screenshot
`prototype.html#result&mislabel&clean` at 1440 x 900 (device scale 2) and
400 x 900 (device scale 3) and crop to the dark photo box.

## What is stored

One row per participant: when it arrived, a generated response ID, the survey
start time, position, years in position, the answers, and how many minutes
the survey took. The page does not ask for a name or email address. While
someone is answering, their answers are kept in their own browser so a reload
does not lose them; they are removed when the answers are sent, when the
participant chooses "Stop and clear my answers", or after 8 hours. If unfinished
answers are found, the page opens on the welcome screen and offers to continue
them or start again, and consent is always asked again, so on a shared computer
the next person never lands in someone else's answers.

If the answer sheet does not confirm that a response arrived, the thank-you
screen shows the first 8 characters of its `response_id` and asks the
participant to email them to the contact.

What the less obvious columns hold:

| Column | Content |
| --- | --- |
| `t1_result`, `t2_result` | "Were you able to complete this task?": Yes / Partly / No / Unsure what to do |
| `t1_note`, `t2_note` | "What did you do, and what happened?" |
| `t1_ease`, `t2_ease` | "How easy or difficult was this task?" 0 (very difficult) to 10 (very easy) |
| `t1_useful`, `t2_useful` | How useful the function would be in their work, 0 (not useful at all) to 10 (very useful): the tray check, the chat |
| `t3_result` | "Based on the information shown, what can you conclude about this set?" (text), given before they are told that the labels for slots 2 and 4 were swapped on purpose; see "Task 3" |
| `t3_spot` | "How easy or difficult would it be to spot a wrongly labelled instrument in a photo like this?" 0 (very difficult) to 10 (very easy) |
| `t3_confidence` | "As a check on IRIS's sorting, how much confidence would a labelled photo like this give you that a set was sorted correctly?" 0 (no confidence) to 10 (complete confidence) |
| `t2_frequency` | How often a tray has an instrument not in its set, or is missing one: Never / About 1 in 100 operations or fewer / About 1 in 50 operations / About 1 in 10 operations / More often than 1 in 10 operations / Not sure |
| `t2_convenient` | How convenient typing to IRIS at the sorting station would be, 0 (very inconvenient) to 10 (very convenient) |
| `stage` | Where the process could fit; "Another stage: …" includes the stage they typed |
| `elsewhere` | "Apart from sorting, where else in your work could a system that recognises and counts instruments help?" |
