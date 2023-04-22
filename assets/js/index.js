window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 2000); // change the value (in milliseconds) to suit your needs
  });

  

  const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 180) {
        totop.classList.add("active");
    } else {
        totop.classList.remove("active");
    }
})





// Get the dropdown button and content
var dropdownBtn = document.getElementsByClassName("dropbtn")[0];
var dropdownContent = document.getElementsByClassName("dropdown-content")[0];

// Toggle the dropdown content when the button is clicked
dropdownBtn.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

// Close the dropdown content if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});
