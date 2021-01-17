const url = location.href;

if (url.search("http://") !== -1) {
    location.href = url.replace("http://", "https://");
}

if (url.search("https://truyentranhaudio.online/") !== -1) {
    document.querySelector(".c-sub-header-nav")?.remove();

    setInterval(() => {
        document.querySelector(".pum-close.popmake-close")?.click();
    }, 100);
} 