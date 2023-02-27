const inputField = document.querySelector("#validation-input");
const dataLength = Number(inputField.dataset.length);

const handleInputField = () => {
    if (inputField.value.trim().length === dataLength) {
        inputField.classList.remove("invalid");
        inputField.classList.add("valid");
    } else {
        inputField.classList.remove("valid");
        inputField.classList.add("invalid");
    }
}

inputField.addEventListener("blur", handleInputField);
