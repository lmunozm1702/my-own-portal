const form = document.querySelector('#contactme');

//Save contact form data into local storage.
const contactFields = ['contact-fullname', 'contact-email', 'contact-message'];

function localStorageAvailable() {
  let storage;
  try {
    const message = 'Storage_Test';
    storage = window['localStorage'];
    storage.setItem(message, message);
    storage.removeItem(message);
    return true;
  }
  catch (e) {
    console.error(e);
    return false;
  }
}

function updateStoredData(savedData, field, value) {
  savedData[field] = value;
  localStorage.setItem('contactFormSavedData', JSON.stringify(savedData));
}

function setDataFromStorage(event) {
  if (!localStorageAvailable) { return false }

  let savedData = localStorage.getItem('contactFormSavedData');
  savedData = JSON.parse(savedData);
  contactFields.forEach((field) => {
    if (savedData != null) {
      form[field].value = savedData[field];
    }

    form[field].addEventListener('input', (event) => {
      if (savedData == null) { savedData = {}; }
      updateStoredData(savedData, field, form[field].value);
    })
  });

  form['reset-button'].addEventListener('click', (event) => {
    localStorage.removeItem('contactFormSavedData');
  });
}

setDataFromStorage();

//Email lowercase validation
function validateEmail(email) {
  if (email.value.trim() === email.value.trim().toLowerCase()) {
    return true;
  }
  return false;
}

function setErrorMessage(id, message, type) {
  const divId = document.querySelector(`#${id}`);

  const errorDiv = document.createElement('div');
  errorDiv.id = `${id}-error-message`;
  errorDiv.className = `contact-${type}`;
  errorDiv.textContent = `${message}`;

  form.insertBefore(errorDiv, divId);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const setBefore = 'div-contact-button';
  const errorDiv = document.querySelector(`#${setBefore}-error-message`);

  if (errorDiv) {
    errorDiv.remove();
  }

  if (!validateEmail(form.elements['contact-email'])) {
    setErrorMessage(setBefore, 'Ooops!, please write your email in lowercase!', 'error');
  } else {
    form.submit();
  }
});
