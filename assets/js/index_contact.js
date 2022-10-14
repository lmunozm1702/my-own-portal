const form = document.querySelector('#contactme');

//Save contact form data into local storage.
const contactFields = ['contact-fullname', 'contact-email', 'contact-message'];
const formData = {
  'contact-fullname': '',
  'contact-email': '',
  'contact-message': ''
}

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

function updateStoredData(field, value, data) {
  console.log(field, value, data);
  formData[field] = value;
  localStorage.setItem('contactFormSavedData', JSON.stringify(formData))
}

function setDataFromStorage(event) {
  if (!localStorageAvailable) { return false }
  //Here Update the formfields with stored data
  let savedData = localStorage.getItem('contactFormSavedData');
  console.log(savedData);

  let fullName = document.querySelector('contact-fullname');
  fullName.value = savedData['contact-fullname'];

  let contactEmail = document.querySelector('contact-email');
  contactEmail.value = savedData['contact-email'];

  let contactMessage = document.querySelector('contact-message');
  contactMessage.value = savedData['contact-message'];
  // Ends Here
  contactFields.forEach((field) => {
    form[field].addEventListener('input', event => {
      updateStoredData(field, form[field].value, event.data)
    })
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
