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











window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".primary-nav");
  if (window.pageYOffset > 0) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});









