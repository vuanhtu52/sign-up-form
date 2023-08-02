const form = document.querySelector("form");
const firstNameInput = document.querySelector("#first-name");
const firstNameError = document.querySelector("#first-name + span.error");
const lastNameInput = document.querySelector("#last-name");
const lastNameError = document.querySelector("#last-name + span.error");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");
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
        if (input.value === "") {
            input.className = "invalid";
            inputError = document.querySelector(`#${input.id} + span.error`);
            inputError.textContent = "Please fill out this field."
            validform = false;
        }
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