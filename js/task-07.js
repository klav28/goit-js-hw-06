const fontSizeControl = document.querySelector("#font-size-control");
const textField = document.querySelector("#text");

const handleSizeControl = () => {
    textField.style.fontSize = `${fontSizeControl.value}px`;
}

fontSizeControl.addEventListener("input", handleSizeControl);

handleSizeControl();