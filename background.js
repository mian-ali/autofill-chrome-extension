chrome.action.onClicked.addListener((tab) => {
    if (tab.url.startsWith('http://') || tab.url.startsWith('https://')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      }).catch((error) => {
        console.error('Error injecting content script:', error);
      });
    }
  });
  