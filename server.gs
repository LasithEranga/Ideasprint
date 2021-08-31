function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index").setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function saveDetails(answerArray){
  
  const spresdSheetID = "11SwZ5TsOtN8IDUDoy58waySsCXcsEtzbcfygPOT5Lvk";
  const spreadSheet = SpreadsheetApp.openById(spresdSheetID);

  const workingSheet = spreadSheet.getSheetByName("submission_log");

  workingSheet.appendRow(answerArray);

}
