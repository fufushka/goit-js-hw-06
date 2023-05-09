const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery")
const imageGallery = images.map(({ url,alt})=> `<li class ="liEl">
  <img src="${url}" alt="${alt}" class="image" 
  >
</li>
` ).join("")
list.insertAdjacentHTML("afterbegin", imageGallery)


list.style.display = "flex"
list.style.flexWrap = "wrap"

const listEl = document.querySelectorAll(".liEl")
listEl.forEach(element =>
  element.style.width = "33.3%"
  )
const image = document.querySelectorAll(".image")
image.forEach( img =>{
  img.style.width = "100%"
  img.style.height = "100%"
  }
  )


