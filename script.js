const form = document.querySelector("form");
const firstNameInput = document.querySelector("#first-name");
const firstNameError = document.querySelector("#first-name + span.error");
const lastNameInput = document.querySelector("#last-name");
const lastNameError = document.querySelector("#last-name + span.error");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");
const phoneNumberInput = document.querySelector("#phone-number");
const phoneNumberError = document.querySelector("#phone-number + span.error");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");
const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password + span.error");
let validform = true;


function isValidPhoneNumber(phoneNumber) {
    if (phoneNumber.length !== 10) {
        return false;
    }
    for (let char of phoneNumber) {
        if (isNaN(char)) {
            return false;
        }
    }
    return true;
}

// When user clicks submit button
form.addEventListener("submit", (event) => {
    // Check if any field is empty when clicking submit
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        // Check if any field is empty when clicking submit
        if (input.value === "") {
            input.className = "invalid";
            inputError = document.querySelector(`#${input.id} + span.error`);
            inputError.textContent = "Please fill out this field."
            validform = false;
        }
        // Check if any field has invalid value
        // if (input.className === "invalid") {
        //     validform = false;
        // }
    });

    if (!validform) {
        event.preventDefault();
    }
});

// When user is typing first name
firstNameInput.addEventListener("input", () => {
    if (firstNameInput.value !== "") {
        firstNameInput.className = "valid";
        firstNameError.textContent = "";
    } else {
        firstNameInput.className = "invalid";
        firstNameError.textContent = "Please fill out this field.";
    }
});

// When user is typing last name
lastNameInput.addEventListener("input", () => {
    if (lastNameInput.value !== "") {
        lastNameInput.className = "valid";
        lastNameError.textContent = "";
    } else {
        lastNameInput.className = "invalid";
        lastNameError.textContent = "Please fill out this field.";
    }
});

// When user is typing email
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
emailInput.addEventListener("input", () => {
    if (emailRegExp.test(emailInput.value)) {
        emailInput.className = "valid";
        emailError.textContent = ""
    } else {
        emailInput.className = "invalid";
        emailError.textContent = "Please enter a valid email address.";
    }
});

// When user is typing phone number
phoneNumberInput.addEventListener("input", () => {
    if (isValidPhoneNumber(phoneNumberInput.value)) {
        phoneNumberInput.className = "valid";
        phoneNumberError.textContent = "";
    } else {
        phoneNumberInput.className = "invalid";
        phoneNumberError.textContent = "Please enter a 10-digit number";
    }
});

// When user is typing password
passwordInput.addEventListener("input", () => {
    // If password is in correct format, remove error message and display green border
    if (/[A-Z]/.test(passwordInput.value) && /\d/.test(passwordInput.value) && passwordInput.value.length >= 8 && passwordInput.value.length <= 16) {
        passwordInput.className = "valid";
        passwordError.textContent = "";
    } else {
    // If password is in wrong format, show red border and remove all error messages
        passwordInput.className = "invalid";
        passwordError.textContent = "";
        while (passwordError.lastElementChild) {
            passwordError.removeChild(passwordError.lastElementChild);
        }
        // If password misses a capital letter
        if (!/[A-Z]/.test(passwordInput.value)) {
            const errorDiv = document.createElement("div");
            errorDiv.textContent = "Must have a capital letter.";
            passwordError.appendChild(errorDiv);
        }
        // If password misses a number
        if (!/\d/.test(passwordInput.value)) {
            const errorDiv = document.createElement("div");
            errorDiv.textContent = "Must have a number.";
            passwordError.appendChild(errorDiv);
        }
        // If password is not in accepted length
        if (passwordInput.value.length < 8 || passwordInput.value.length > 16) {
            const errorDiv = document.createElement("div");
            errorDiv.textContent = "Must have 8-16 characters.";
            passwordError.appendChild(errorDiv);
        } 
    }
    // Check if password matched the confirm-password field
    if (passwordInput.value === confirmPasswordInput.value) {
        confirmPasswordInput.className = "valid";
        confirmPasswordError.textContent = "";
    } else {
        confirmPasswordInput.className = "invalid";
        confirmPasswordError.textContent = "Passwords do not match.";
    }
});

// When user is typing confirmed password
confirmPasswordInput.addEventListener("input", () => {
    if (confirmPasswordInput.value === passwordInput.value) {
        confirmPasswordInput.className = "valid";
        confirmPasswordError.textContent = "";
    } else {
        confirmPasswordInput.className = "invalid";
        confirmPasswordError.textContent = "Passwords do not match.";
    }
});

