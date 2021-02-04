// @ts-nocheck
// document.addEventListener("load", function() {

const SWITCH_NAME = "lemmeathtem-fu89ufh8ufvj--display-none";

const style = document.createElement("style");
style.innerHTML = `
    .${SWITCH_NAME} {
      display: none;
    }
    `;

document.head.appendChild(style);

// Event for toggle visible header
window.addEventListener("keydown", (event) => {
  //
  console.log(event.key);
  const ytPlayer = document.querySelector("#ytd-player");

  if (!ytPlayer.contains(document.activeElement)) {
    return;
  }

  switch (event.key) {
    case "h":
      toggleVisible();
      break;

    case "s":
      openSettings();
      break;

    case "q":
      openQuality();
      break;

    case "e":
      focusOnHighestHDOption();
      break;
  }
});

// ----------------- FUNCTIONS --------------

function xpathSelectAll(xpath, ctxNode = document) {
  const jpgLinks = document.evaluate(
    xpath,
    ctxNode,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  const numLinks = jpgLinks.snapshotLength;
  const xnodeList = [];

  for (let J = 0; J < numLinks; ++J) {
    const thisLink = jpgLinks.snapshotItem(J);
    xnodeList.push(thisLink);
  }

  return xnodeList;
}

function focusOnHighestHDOption() {
  const$qualityTitle = document.querySelector("div.ytp-panel-header");
  const$qualityTitle.click();

  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  const cancelled = !const$qualityTitle.dispatchEvent(event);

  console.log(const$qualityTitle.innerHTML);
}

function toggleVisible() {
  const topBar = document.querySelector(".ytp-chrome-top");
  const bottomBar = document.querySelector(".ytp-chrome-bottom");
  topBar.classList.toggle(SWITCH_NAME);
  bottomBar.classList.toggle(SWITCH_NAME);
}

function openSettings() {
  const$settingsBtn = document.querySelector(
    "#movie_player .ytp-settings-button"
  );
  const$settingsBtn.click();
}

function openQuality() {
  const$qualityBtnXpath =
    "//div[@class='ytp-menuitem-label'][contains(text(),'Quality')]";

  qualityBtn = xpathSelectAll(const$qualityBtnXpath)[0];

  qualityBtn.click();
}

function getCSSselector(elemt) {
  while (elemt.parent) {}
}

function elemt(name = "input", attrMap, ...children) {
  let dom = document.createElement(name);
  for (let attr in attrMap) {
    dom.setAttribute(attr, attrMap[attr]);
  }
  dom.append(...children);
  return dom;
}

console.log("YT done with me 👌");
// })
