const form = document.querySelector('#contactme');

function validateEmail(email) {
    if (email.value.trim() === email.value.trim().toLowerCase()) {
        return true;
    }
    return false;
}

function setMessage(id, message, type) {
    const divId = document.querySelector(`#${id}`);

    const errorDiv = document.createElement('div');
    errorDiv.id = `${id}-error-message`;
    errorDiv.className = `contact-${type}`;
    errorDiv.textContent = `${message}`;

    form.insertBefore(errorDiv, divId);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let errorDiv = document.querySelector('#contact-email-error-message');

    if (errorDiv) {
        errorDiv.remove();
    }

    if (!validateEmail(form.elements['contact-email'])) {
        setMessage('contact-email', 'Ooops!, please write your email in lowercase!', 'error');
    }
    else {
        form.submit();
    };
});
