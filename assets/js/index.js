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



$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
autoplay:true,
autoplayTimeout:2500,
stagePadding:50,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      800:{
          items:2
      },
      1000:{
          items:3
      },
      
      1400:{
          items:5
      }
  }
})









$(document).ready(function(){
  $('.owl-carousel').owlCarousel2({
    items: 2,
    dots: true,
    nav: false
  });
});
