document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("closePopup").addEventListener("click", function () {
        window.close();
    });

    document.querySelectorAll(".extension-info").forEach(function (item) {
        item.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            if (chrome.tabs) {
                chrome.tabs.create({ url: url });
            } else {
                window.open(url, "_blank");
            }
        });
    });
});
