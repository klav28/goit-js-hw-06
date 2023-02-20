let counterValue = 0;

const buttonEl = document.querySelectorAll("button");
const counterTextEl = document.querySelector("#value");

const handleClick = event => {
    if (event.srcElement.dataset.action === "increment") counterValue += 1;
    if (event.srcElement.dataset.action === "decrement") counterValue -= 1;
    counterTextEl.textContent = counterValue;
}

buttonEl.forEach(el => el.addEventListener("click", handleClick));
