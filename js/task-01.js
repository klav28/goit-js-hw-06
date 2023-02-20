const listsArray = document.querySelectorAll("li.item");

console.log("Number of categories: ", listsArray.length);

for (const listEl of listsArray) {
    console.log("Caterogy: ", listEl.querySelector("h2").textContent);
    console.log("Elements: ", listEl.querySelectorAll("li").length);
}

