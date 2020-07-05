// background.js
chrome.runtime.onInstalled.addListener(function() {
  console.log("Installed! :>");
});
chrome.runtime.onMessage.addListener(
function(message, callback) {
  if (message === "runContentScript"){
    chrome.tabs.executeScript({
      file: 'contentScript.js'
    });
  }
});