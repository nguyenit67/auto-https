// @ts-nocheck
// background.js
chrome.runtime.onInstalled.addListener(function () {
  console.log("Installed! :>");
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status && changeInfo.status === "complete") {
    chrome.tabs.executeScript({
      file: "script/exten_youtube.js",
    });

    chrome.tabs.insertCSS(tabId, {
      code: `
      #items > ytd-continuation-item-renderer { 
        display: none;
      }
    `,
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request && request.action === "createIncognitoWindow" && request.url) {
    chrome.windows.create(
      { url: request.url, incognito: true },
      function (win) {
        sendResponse(win);
      }
    );
  }
});
