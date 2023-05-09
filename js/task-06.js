const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", inputValidation);

function inputValidation() {
  const requiredLength = inputEl.dataset.length;
  const inputValue = inputEl.value.trim();

  if (parseInt(requiredLength) === inputValue.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
