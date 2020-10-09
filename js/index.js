var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



function myFunction() {
  document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}


const allDropdowns = document.querySelectorAll(".dropdown");

if (allDropdowns != null) {
  allDropdowns.forEach(dd => {
    const button = dd.querySelector(".dropdown-button");
    const menu = dd.querySelector(".dropdown-menu");

    button.onclick = function() {
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "inline-block";
      } else {
        menu.style.display = "none";
      }
    }
    const options = menu.querySelectorAll(".dropdown-option");

    if (options != null) {
      options.forEach(o => {
				o.onclick = function () {
        	button.innerHTML = o.innerHTML;
          menu.style.display = "none";
        }
      })
    }
  })
}
