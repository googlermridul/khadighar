$(document).ready(function() {

   $(".remove-item").click(function() {
      $(this).parents(".cart-box").toggle();
   });

   $("#trendyProductSection .switcher").click(function() {
      $("#trendyProductSection .switcher").removeClass("active");
      $(this).addClass("active");
   });


   var owl = $('#homeSection .owl-carousel');
   owl.owlCarousel({
      animateOut: 'fadeOut',
      loop:true,
      nav:true,
      margin:0,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive:{
         0:{
            items:1
         }
      }
   });


   var owl = $('#trendyProductSection .owl-carousel');
   owl.owlCarousel({
      animateOut: 'fadeOut',
      loop:false,
      nav:true,
      margin: 0,
      autoplay:false,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      responsive:{
         0: {
            items:2
         },
         552: {
            items:2
         },
         768: {
            items:3
         },
         992: {
            items:4
         }
      }
   });

   /*-- AOS SCROLL ANIAMATION PLUGIN --*/
   AOS.init({
     duration: 1000,
     offset: "50px"
   })

   /*-- SCROLL UP --*/
   $(".scroll-up").fadeOut();
   $(window).scroll(function() {
      if ( $(this).scrollTop()>100 ) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function() {
      $("html").animate({scrollTop: 0}, 1000);
      return false;
   });

});
