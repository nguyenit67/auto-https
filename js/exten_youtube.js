const topBar = document.querySelector(".ytp-chrome-top");
const bottomBar = document.querySelector(".ytp-chrome-bottom");

const SWITCH_NAME = "lemmeathtem-fu89ufh8ufvj--display-none";

const BUTTON_CLASSNAME = "betbet";

const style = document.createElement("style");
style.innerHTML = `
  .${SWITCH_NAME} {
    display: none;
  }

  .${BUTTON_CLASSNAME} {
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 9999;
  }
`;

document.head.appendChild(style);

const trigBtn = elemt(
  "button",
  {
    class: BUTTON_CLASSNAME,
  },
  "X"
);

document.querySelector("#player-theater-container").appendChild(trigBtn);

trigBtn.onclick = toggleVisible;

// ----------------- FUNCTIONS --------------
function toggleVisible() {
  topBar.classList.toggle(SWITCH_NAME);
  bottomBar.classList.toggle(SWITCH_NAME);
}

function elemt(name = "input", attrMap, ...children) {
  let dom = document.createElement(name);
  for (let attr in attrMap) {
    dom.setAttribute(attr, attrMap[attr]);
  }
  dom.append(...children);
  return dom;
}

// const eraseClipsInterval = window.setInterval(() => {
//   console.log("Inside Checking 🥓🥚!");
//   const noneedClips = document.querySelectorAll(
//     "#items > ytd-continuation-item-renderer"
//   );
//   if (noneedClips) {
//     console.log("Remove it");

//     noneedClips.forEach(clip => clip.remove());
//     window.clearInterval(eraseClipsInterval);
//     console.log("Removed it 🖖");
//   }
// });

console.log("YT done with me 👌");
