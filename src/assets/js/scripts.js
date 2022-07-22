let navitems = document.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navitems.length; i++) {
  navitems[i].addEventListener("click", function () {
    var current = this.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
