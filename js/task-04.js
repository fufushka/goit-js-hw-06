const buttonIncrEl = document.querySelector('button[data-action="increment"]')
const buttonDecrEl = document.querySelector('button[data-action="decrement"]')
const counter = document.querySelector("#value")

let counterValue = 0;
buttonIncrEl.addEventListener("click", incrementAction)

buttonDecrEl.addEventListener("click", decrementAction)
function incrementAction() { 
     counter.textContent= counterValue += 1;
}
function decrementAction() { 
     counter.textContent= counterValue -= 1;
}