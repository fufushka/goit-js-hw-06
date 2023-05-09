const inputEL = document.getElementById("font-size-control");
const text = document.getElementById("text");

inputEL.addEventListener("input", fontSizeUpdate);

function fontSizeUpdate() {
  text.style.fontSize = inputEL.value + "px";
}
