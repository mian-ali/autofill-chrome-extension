console.log('Content script loaded');

function fillForms() {
  const formData = {
    name: 'Vanessa Mint',
    email: 'vanessa@example.com',
    phoneNum: '+923014095035'
  };

  // Common selectors for input fields
  const inputSelectors = {
    name: ['#name', '[name="name"]', '[placeholder*="name"]'],
    email: ['#email', '[name="email"]', '[placeholder*="email"]'],
    phoneNum: ['#phoneNum', '[name*="phone"]', '[placeholder*="phone"]']
  };

  // Fill input fields based on the selectors
  for (const [key, selectors] of Object.entries(inputSelectors)) {
    let inputFound = false;
    for (const selector of selectors) {
      const input = document.querySelector(selector);
      if (input) {
        input.value = formData[key];
        input.dispatchEvent(new Event('input', { bubbles: true })); 
        inputFound = true;
        break; 
      }
    }
    if (!inputFound) {
      console.warn(`Input field for ${key} not found`);
    }
  }
}

// Run the fillForms function immediately
fillForms();
