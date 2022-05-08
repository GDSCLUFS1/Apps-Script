function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify(getProfile()))
}
