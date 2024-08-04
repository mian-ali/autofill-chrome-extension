document.getElementById('enable-fill').addEventListener('click', () => {
    chrome.storage.local.set({ autoFillEnabled: true }, () => {
      console.log('Auto fill enabled');
    });
  });
  
  document.getElementById('disable-fill').addEventListener('click', () => {
    chrome.storage.local.set({ autoFillEnabled: false }, () => {
      console.log('Auto fill disabled');
    });
  });
  