// background.js
chrome.runtime.onInstalled.addListener(function () {
  console.log("Installed! :>");
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status && changeInfo.status === "complete") {
    chrome.tabs.executeScript({
      file: "script/exten_youtube.js"
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
