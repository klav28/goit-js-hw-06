const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const quantity = document.querySelector("input[type=number]");
const boxField = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let elementSize = 30;
  const sizeIncrement = 10;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    boxes.push(`<div style="width:${elementSize}px;height:${elementSize}px;background-color:${getRandomHexColor()};border:2px dashed #222"></div>`);
    elementSize += sizeIncrement;
  }
  
  boxField.insertAdjacentHTML("afterbegin", boxes.join(" "));
}

const handleClickCreate = () => {
  if ((quantity.value < 1) || (quantity.value > 100)) {
    return alert("Кількість елементів повинна бути більше 0 та менша за 100");
  }
  createBoxes(quantity.value);
}

const handleClickDestroy = () => {
  boxField.innerHTML="";
}

btnCreate.addEventListener("click", handleClickCreate);
btnDestroy.addEventListener("click", handleClickDestroy);

boxField.style.display = "flex";
boxField.style.flexWrap = "wrap";
boxField.style.gap = "5px";