const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientList = ingredients.reduce((acc, el) => acc += `<li>${el}</li>\r\n`, "");

const ingredientsArray = [];

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  ingredientsArray.push(liEl);
}

const ingredientsListEl = document.querySelector("#ingredients");

ingredientsListEl.prepend(...ingredientsArray);

// console.log(ingredientsListEl);
