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







// Show/hide submenu on click (for mobile devices)
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('show');
});

// Hide submenu on mouse leave (for desktop devices)
document.querySelectorAll('.menu > li').forEach(function(li) {
  li.addEventListener('mouseleave', function() {
    this.querySelector('.submenu').classList.remove('show');
  });
});

// Show submenu on mouse enter (for desktop devices)
document.querySelectorAll('.menu > li').forEach(function(li) {
  li.addEventListener('mouseenter', function() {
    this.querySelector('.submenu').classList.add('show');
  });
});






















