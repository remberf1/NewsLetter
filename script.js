const errorMessage = document.querySelector('.error');
const container = document.getElementById('container');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
const confirmationContainer = document.getElementById('confirmation');
const confirmationWrapper = document.getElementById('confirmation-wrapper');
const confirmationDismissBtn = document.getElementById('close-btn');
const emailInput = document.getElementById('email');
const emailSpan = document.getElementById('email-span');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const isValid = validateEmail(email);

    if (!isValid) {
        emailInput.classList.add('input-error');
        displayError(true);
        return;
    }

    emailInput.classList.remove('input-error');
    displayError(false);
    emailSpan.textContent = email;
    emailInput.value = '';
    
    container.style.display = 'none'; // Hide form container
    confirmationWrapper.classList.add('show'); // Show confirmation
});

function validateEmail(email) {
    const emailPattern = /^(?!\.)[\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*@(?:(?!-)[a-zA-Z0-9-]{1,63}(?<!-)\.)+[a-zA-Z]{2,63}$/;
    return emailPattern.test(email);
}

function displayError(show = true) {
    errorMessage.style.display = show ? 'flex' : 'none';
}

emailInput.addEventListener('input', () => {
    emailInput.classList.remove('input-error');
    displayError(false);
});

confirmationDismissBtn.addEventListener('click', () => {
    confirmationWrapper.classList.remove('show'); // Hide confirmation
    container.style.removeProperty('display');    // Let CSS handle display again
});