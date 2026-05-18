function openDialog(message) {

  let dialog = document.getElementById("customDialog")

  let text = document.getElementById("dialogText")

  text.innerHTML = message

  dialog.showModal()

}

function closeDialog() {

  document.getElementById("customDialog").close()

}


// Popup Message

function showMessage(text) {

  let popup = document.getElementById("popupBox")

  popup.innerHTML = text

  popup.style.right = "20px"

  setTimeout(function () {

    popup.style.right = "-300px"

  }, 2000)

}


// Search Alert

function searchAlert() {

  openDialog(" Searching Amazing Products For You")

}


// Cart Alert

function cartAlert() {

  openDialog(" Product Successfully Added To Cart")

}


// Hero Slider

let images = [

  "./kic1.jpg",
  "./flg.jpg",
  "./gam1.jpg",
  "./hero1.jpg"
]

let current = 0

function showSlide() {

  document.getElementById("slideImage").src = images[current]

}

function nextSlide() {

  current++

  if (current >= images.length) {

    current = 0

  }

  showSlide()

}

function prevSlide() {

  current--

  if (current < 0) {

    current = images.length - 1

  }

  showSlide()

}


// Auto Slide

setInterval(function () {

  nextSlide()

}, 3000)


// Welcome Alert

window.onload = function () {

  showMessage("Welcome To Amazon Clone Website")

  openDialog(" Welcome Mark! Enjoy Your Shopping Experience")

}

// PRODUCT SLIDER

function moveSlide(direction, id) {

  let slider = document.getElementById(id)

  slider.scrollLeft += direction * 300

}


// IMAGE CLICK

let allImages = document.querySelectorAll(".product-slider img")

allImages.forEach(function (img) {

  img.addEventListener("click", function () {

    openDialog("Awesome Product Selected")

  })

})
