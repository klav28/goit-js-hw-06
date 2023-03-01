const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

const txtSetField = (event) => {
    event.currentTarget.value.trim() === ""
        ? outputNameEl.textContent = "Anonymous"
        : outputNameEl.textContent = event.currentTarget.value.trim();
}

inputNameEl.addEventListener("input", txtSetField);
