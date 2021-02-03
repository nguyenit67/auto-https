// @ts-nocheck
$x = function (xpath) {
  var jpgLinks = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  var numLinks = jpgLinks.snapshotLength;
  const xnodeList = [];

  for (var J = 0; J < numLinks; ++J) {
    var thisLink = jpgLinks.snapshotItem(J);
    xnodeList.push(thisLink);
  }

  return xnodeList;
};

async function delay(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}

(async function () {
  const friendList = $$('[aria-label="Friends"]');
  for (const friend of friendList) {
    await delay(1000);
    $x("//span[contains(text(),'Unfriend')]")[0].click();

    await delay(1000);
    $x("//span[contains(text(),'Confirm')]")[0].click();
  }
})();

sel007 =
  'div[data-visualcompletion="ignore-dynamic"] + div > div[aria-label="Action options"] ';

del_confirm = '[aria-label="Delete"]';

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "q":
      document.querySelector(sel007).click();

      break;

    case "e":
      document.querySelector(del_confirm).click();
      break;

    default:
      break;
  }
});

let getcssSelector = function (elemt = "") {
  while (elemt) {}
};
