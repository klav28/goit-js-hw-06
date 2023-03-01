const inputField = document.querySelector("#validation-input");
const dataLength = Number(inputField.dataset.length);

function changeOutline(removeClass, setClass) {
        inputField.classList.remove(removeClass);
        inputField.classList.add(setClass);
}

const handleInputField = () => {
    if (inputField.value.trim().length === dataLength) {
        changeOutline("invalid", "valid");
    } else {
        changeOutline("valid", "invalid");
    }
}

inputField.addEventListener("blur", handleInputField);
