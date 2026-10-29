// Receives answers from the IRIS study page and adds one row per response to
// the "Responses" sheet. Paste into the Google Sheet's Extensions > Apps Script
// and deploy as a web app (see README.md).

// Each version whose columns change writes to a new tab with its own header.
// Version 3: three tasks (the collision task removed; task 3 is the photo review).
// Older "Responses" and "Responses v2" tabs (test rows only) can be deleted.
const SHEET_NAME = "Responses v3";
// Column order; the page sends these keys (keep in step with FIELDS in index.html). "received_at" is added here.
const FIELDS = ["response_id", "started_at", "minutes_taken", "position", "position_other", "years", "video_note",
  "t1_result", "t1_note", "t1_ease", "t1_useful",
  "t2_result", "t2_note", "t2_ease", "t2_useful", "t2_frequency", "t2_convenient",
  "t3_result", "t3_spot", "t3_confidence",
  "umux_capabilities", "umux_easy", "stage", "influence", "elsewhere", "other"];
const MAX_TEXT = 4000;

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    if (typeof data.response_id !== "string" || !data.response_id) return reply_({ ok: false, error: "missing response_id" });
    const sheet = sheet_();
    const last = sheet.getLastRow();
    const ids = last > 1 ? sheet.getRange(2, 2, last - 1, 1).getValues().map((r) => r[0]) : [];
    // A participant's browser may send the same response twice; keep the first.
    if (ids.indexOf(data.response_id) === -1) {
      sheet.appendRow([new Date()].concat(FIELDS.map((k) => clean_(data[k]))));
    }
    return reply_({ ok: true });
  } catch (err) {
    return reply_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Opening the web app URL in a browser shows that it is running.
function doGet() {
  return ContentService.createTextOutput("IRIS study answer sheet is running.");
}

function sheet_() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = book.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["received_at"].concat(FIELDS));
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Text from the page is stored as text: long answers are cut, and anything a
// spreadsheet would run as a formula gets a leading apostrophe.
function clean_(value) {
  if (value === undefined || value === null) return "";
  let text = String(value).slice(0, MAX_TEXT);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
