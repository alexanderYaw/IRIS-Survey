# IRIS sorting study

A one-page survey for sterile processing (CSSD) staff, about 10 minutes:
consent, position, a side-by-side video of IRIS, four tasks on the clickable
prototype, two rating statements (UMUX-Lite) and three questions about their
work. Answers are anonymous and go to a Google Sheet.

| File | What it is |
| --- | --- |
| `index.html` | The survey page |
| `prototype.html` | The clickable operator screen (`design-demos/dir-2.html` from the IRIS repo; its chat reply is changed for the study) |
| `side-by-side.mp4`, `side-by-side-poster.jpg` | The video: operator screen and robot arm, 1.5× speed, no sound (the page plays its first and last 5 seconds at normal speed) |
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

A "Responses" tab with column headers appears with the first answer. A
response sent twice (for example after a poor connection) is stored once.

If you change `apps-script.gs` later, use **Deploy > Manage deployments >
Edit > New version**, so the URL stays the same.

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

## What is stored

One row per participant: when it arrived, a generated response ID, the survey
start time, position, years in position, the answers, and how many minutes
the survey took. The page does not ask for a name or email address. While
someone is answering, their answers are kept in their own browser so a reload
does not lose them; they are removed when the answers are sent.

What the less obvious columns hold:

| Column | Content |
| --- | --- |
| `t1_result` to `t3_result` | "Were you able to complete this task?": Yes / Partly / No / Unsure what to do |
| `t1_note` to `t3_note` | "What did you do, and what happened?" |
| `t4_result` | "Based on the information shown, what can you conclude about this set?" (text) |
| `t4_note` | "What, if anything, would you still need to check before moving it to the next stage?" |
| `stage` | Where the process could fit; "Another stage: …" includes the stage they typed |
