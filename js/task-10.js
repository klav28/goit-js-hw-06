function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {

  let elementSize = 30;
  const sizeIncrement = 10;

  for (let i = 0; i < amount; i += 1) {
    
  }
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const quantity = document.querySelector("input[type=number]");

const handleClickCreate = () => {
  console.log("CREATE -> ");
  console.log(quantity.value);
}

const handleClickDestroy = () => {
  console.log("DESTROY");
}

btnCreate.addEventListener("click", handleClickCreate);
btnDestroy.addEventListener("click", handleClickDestroy);
