const eraseClipsInterval = window.setInterval(() => {
  console.log("Inside Checking 🥓🥚!");
  const noneedClips = document.querySelectorAll(
    "#items > ytd-continuation-item-renderer"
  );
  if (noneedClips) {
    console.log("Remove it");

    noneedClips.forEach(clip => clip.remove());
    window.clearInterval(eraseClipsInterval);
  }
});

console.log("yt+ loaded by background.js");
