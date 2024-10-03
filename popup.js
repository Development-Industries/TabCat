const socialMediaDomains = ['facebook.com', 'twitter.com', 'instagram.com', 'linkedin.com'];
const newsDomains = ['nytimes.com', 'bbc.com', 'cnn.com'];

document.getElementById("open-all-tabs").addEventListener("click", () => {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => chrome.tabs.update(tab.id, { active: true }));
    });
});

document.getElementById("close-all-tabs").addEventListener("click", () => {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => chrome.tabs.remove(tab.id));
    });
});

document.getElementById("open-social-media-tabs").addEventListener("click", () => {
    openTabsByDomain(socialMediaDomains);
});

document.getElementById("close-social-media-tabs").addEventListener("click", () => {
    closeTabsByDomain(socialMediaDomains);
});

document.getElementById("open-news-tabs").addEventListener("click", () => {
    openTabsByDomain(newsDomains);
});

document.getElementById("close-news-tabs").addEventListener("click", () => {
    closeTabsByDomain(newsDomains);
});

document.getElementById("open-settings").addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
});

// Helper functions for tab management by domain
function openTabsByDomain(domains) {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
            if (domains.some(domain => tab.url.includes(domain))) {
                chrome.tabs.update(tab.id, { active: true });
            }
        });
    });
}

function closeTabsByDomain(domains) {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
            if (domains.some(domain => tab.url.includes(domain))) {
                chrome.tabs.remove(tab.id);
            }
        });
    });
}

