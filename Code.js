var ssid = '1bXdHjua1ukwioHu20XtSt9WrGuhokW4VMwc9OEP2HyY'
var fid = '1hsI6Xzln3gVl1WFItYNj2P99U_NuCCg5H4xqFJxvGuo'
var ff = FormApp.openById(fid)
var ss = SpreadsheetApp.openById(ssid)
var sheet = ss.getSheetByName('Dashboard')
var adminKey = '7171'

function getProfile() {
  var lr = sheet.getLastRow()
  var profile = {
    bio: getLastValue(lr, 'F'),
    facebook: getLastValue(lr, 'G'),
    twitter: getLastValue(lr, 'I'),
    instagram: getLastValue(lr, 'H'),
    linkedIn: getLastValue(lr, 'J'),
    youtube: getLastValue(lr, 'K'),
    links:getLinks()
  }
  // Logger.log(profile)
  return profile
}
function getLastValue(lrow, col) {
  // it return last correct value
  for (var i = lrow; i >= 2; i--) {
    var cell = sheet.getRange(`${col}${i}`).getValue()
    // iza la2et value not equal to null
    if (cell != '' && sheet.getRange(i, 2).getValue() == adminKey) {
      //i found value
      return cell
    }
  }


}


function getLinks() {
  var links = []
  var lr = sheet.getLastRow()

  for (let i = 2; i <= lr; i++) {
    var name = sheet.getRange(`D${i}`).getValue()
    var url = sheet.getRange(`E${i}`).getValue()
    if (name != '' && sheet.getRange(i, 2).getValue() == adminKey) {
      links.push({
        name: name,
        url : url
      })
    }
  }

  // Logger.log(links)
  return links
}







