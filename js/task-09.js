function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColorChange = document.querySelector("button");
const colorTextField = document.querySelector(".color");

const handleBtnColorChange = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorTextField.textContent = randomColor;
}

btnColorChange.addEventListener("click", handleBtnColorChange);
