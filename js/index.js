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
