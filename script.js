const form = document.querySelector("form");
const firstNameInput = document.querySelector("#first-name");
const firstNameError = document.querySelector("#first-name + span.error");
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

form.addEventListener("submit", (event) => {
    // Check if any field is empty when clicking submit
    const inputs = document.querySelectorAll("input");
    console.log(inputs);
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