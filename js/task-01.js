const list = document.querySelector("#categories")
const listEl = document.querySelectorAll(".item")

console.log(`Number of categories: ${listEl.length}`)
 
listEl.forEach( element => {
    const category = element.querySelector("h2").textContent
    const elements = element.querySelectorAll("li")

    console.log(`Category:${category}`)
    
    console.log(`Elements:${elements.length}`)
}
    )