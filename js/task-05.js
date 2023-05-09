const inputEl = document.getElementById("name-input")
const outputNameEl = document.getElementById("name-output")

inputEl.addEventListener("input",inputValueUpdate)

function inputValueUpdate(){ 
    if (inputEl.value.trim() !== "") { outputNameEl.textContent = inputEl.value.trim() }
    else { 
        outputNameEl.textContent ="Anonymous"
    }
}