$(document).ready(function() {
  $nav = $(".nav");
  $navItems = $(".nav .nav-items");

  $toggleCollapse = $(".toggle-collapse");
  /* click event*/

  $toggleCollapse.click(function() {
    $nav.toggleClass("collapse");
  });

  // owl caousrl
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    // here iam use icon انا هنا حدد الايقونات العاوزه يستخدمها بدل الكان الكوسر محددها بنفسه
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next")
    ],

    // ده عشان اخليه ريسبوسيف
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });
});
