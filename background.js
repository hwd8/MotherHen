const forbidden = ["facebook", "youtube", "discord", "bilibili", "twitter", "tumblr"];

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        tabs.forEach(t => {
            forbiddenTab = forbidden.filter(f => t.url.includes(f))[0];
            if(forbiddenTab) {
                alert(forbiddenTab.toUpperCase() + " IS CANCELLED!");
                chrome.tabs.remove(t.id, function() {
                    if(chrome.runtime.lastError) {
                    }
                });
            }
        });
    });
});