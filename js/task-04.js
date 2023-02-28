let counterValue = 0;

const counterTextEl = document.querySelector("#value");
// const buttonEl = document.querySelectorAll("button");

// const handleClick = event => {
//     if (event.target.dataset.action === "increment") counterValue += 1;
//     if (event.target.dataset.action === "decrement") counterValue -= 1;
//     counterTextEl.textContent = counterValue;
// }
// buttonEl.forEach(el => el.addEventListener("click", handleClick));

const counterForm = document.querySelector("#counter");
const handleClick = event => {
    switch (event.target.dataset.action) {
        case "increment":
            counterValue += 1;
            break;
        case "decrement": 
            counterValue -= 1;
    }
    counterTextEl.textContent = counterValue;
}

counterForm.addEventListener("click", handleClick);
