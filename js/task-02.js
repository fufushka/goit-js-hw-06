const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")
  
 ingredients.forEach(ingridient  => {
   const listEl = document.createElement("li")
   listEl.textContent = ingridient
   listEl.classList.add("item")
   list.append(listEl)
   console.log()

 });