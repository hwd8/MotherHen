chrome.runtime.onInstalled.addListener(function() {
    console.log("I am installed");
    chrome.storage.sync.set({"color": '#3aa757'}, function() {
        console.log("STORED");
    });
    chrome.storage.sync.get(["color"], function(value) {
        console.log(value);
    })
});