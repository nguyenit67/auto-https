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
  console.log(event.key);
  if (event.key === "h") {
  }
  switch (event.key) {
    case "h":
      toggleVisible();
      break;

    case "q":
      openSettings();
      break;

    case "s":
      openSettings();
      break;
  }
});

// ----------------- FUNCTIONS --------------
function toggleVisible() {
  const topBar = document.querySelector(".ytp-chrome-top");
  const bottomBar = document.querySelector(".ytp-chrome-bottom");
  topBar.classList.toggle(SWITCH_NAME);
  bottomBar.classList.toggle(SWITCH_NAME);
}

function openSettings() {
  const settingsBtn = document.querySelector(
    "#movie_player .ytp-settings-button"
  );
  settingsBtn.click();
}

function openQuality() {
  const qualityBtn = document.querySelectorAll(
    "#ytp-id-17 > div > div > div:nth-child(4)"
  );
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
