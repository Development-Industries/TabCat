document.getElementById("save-settings").addEventListener("click", () => {
    const maxTabs = document.getElementById("max-tabs").value;
    chrome.storage.sync.set({ maxTabs: maxTabs }, () => {
        alert('Settings saved!');
    });
});

window.onload = () => {
    chrome.storage.sync.get(["maxTabs"], (result) => {
        if (result.maxTabs) {
            document.getElementById("max-tabs").value = result.maxTabs;
        }
    });
};
