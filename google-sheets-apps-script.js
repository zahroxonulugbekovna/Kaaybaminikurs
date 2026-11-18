// KAAYBA saytlaridan kelgan lidlarni jadvalga yozadi.
//   Asosiy (Prof) kurs sayti  -> "Lidlar" varag'i
//   Mini kurs sayti (source = "kaayba-mini-kurs") -> "Mini kurs" varag'i
// Joylash: Google Sheets -> Kengaytmalar (Extensions) -> Apps Script -> shu kodni qo'ying -> Deploy.
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents || '{}');
    if (!d.name || !d.phone) return out({ ok: false });
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (d.source === 'kaayba-mini-kurs') {
      ss.getSheetByName('Mini kurs').appendRow([new Date(), String(d.name), "'" + String(d.phone), String(d.format || ''), String(d.goal || ''), String(d.utm || 'Sayt'), 'Yangi', '', '', '', '']);
    } else {
      ss.getSheetByName('Lidlar').appendRow([new Date(), String(d.name), "'" + String(d.phone), String(d.goal || ''), String(d.format || ''), 'Sayt', 'Yangi', '', '', '', '']);
    }
    return out({ ok: true });
  } finally {
    lock.releaseLock();
  }
}
function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
