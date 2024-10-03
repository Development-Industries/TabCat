chrome.runtime.onInstalled.addListener(() => {
    console.log("Tabcat extension installed.");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "suspend-tab") {
        chrome.tabs.discard(sender.tab.id);
    }
});
