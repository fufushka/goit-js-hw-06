const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const markup = ingredients.forEach((ingridient) => {
  const listEl = document.createElement("li");
  listEl.textContent = ingridient;
  listEl.classList.add("item");
});
list.append(...markup);
console.log();
