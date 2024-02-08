// Get form and input elements
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('emailAddress');
const companyInput = document.getElementById('companyName');
const titleInput = document.getElementById('title');
const messageInput = document.getElementById('messageArea');

// Add event listener for form submission
form.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs();
});

// Function to set error message for input element
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('invalid', 'error-placehoder');
    inputControl.classList.remove('valid');
};

// Function to clear error message for input element
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('valid');
    inputControl.classList.remove('invalid', 'error-placehoder');
};

// Function to validate email format
const isValidEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(String(email).toLowerCase());
};

// Function to validate all inputs
const validateInputs = () => {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const companyValue = companyInput.value.trim();
    const titleValue = titleInput.value.trim();
    const messageValue = messageInput.value.trim();

    // Validate name input
    if (nameValue === '') {
        setError(nameInput, 'Name is required');
    } else {
        setSuccess(nameInput);
    }

    // Validate email input
    if (emailValue === '') {
        setError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Provide a valid email address');
    } else {
        setSuccess(emailInput);
    }

    // Validate company input
    if (companyValue === '') {
        setError(companyInput, 'Company Name is required');
    } else {
        setSuccess(companyInput);
    }

    // Validate title input
    if (titleValue === '') {
        setError(titleInput, 'Title is required');
    } else {
        setSuccess(titleInput);
    }

    // Validate message input
    if (messageValue === '') {
        setError(messageInput, 'Message is required');
    } else {
        setSuccess(messageInput);
    }
};




