
function getCurrentTabTitle() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentTab = tabs[0];
        var title = currentTab.title;
        document.getElementById("titleDisplay").textContent = "Current Tab Title: " + title;
    });
}


document.getElementById("getTitleBtn").addEventListener("click", getCurrentTabTitle);
