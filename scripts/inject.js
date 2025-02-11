const script = document.createElement('script');
script.src = chrome.runtime.getURL('scripts/returnDislike.js');
script.onload = function () {
    this.remove();

    console.log("Return YouTube Dislike loaded");
};
(document.head || document.documentElement).appendChild(script);