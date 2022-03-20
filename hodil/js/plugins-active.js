(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    //menu active
    jQuery(".stellarnav").stellarNav({
      theme: "light",
      breakpoint: 960,
      position: "right",
      phoneBtn: "+8801845592277",
      locationBtn: "https://www.google.com/maps",
    });

    //WOW Animation
    new WOW().init();

    //Welcome Owl Carousel
    var welcome_slider_img = $(".welcome_slider_img");
    welcome_slider_img.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      smartSpeed: 2000,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
    });

    //welcome_area animation
    welcome_slider_img.on("translated.owl.carousel", function () {
      $(".welcome_slider_img .welcome_slider_card")
        .removeClass("fadeInRight animated")
        .hide();
    });
    welcome_slider_img.on("translated.owl.carousel", function () {
      $(".owl-item.active .welcome_slider_card")
        .addClass("fadeInRight animated")
        .show();
    });

    //Client Owl Carousel
    var client_carousel = $(".client_carousel");
    client_carousel.owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      smartSpeed: 1000,
      items: 1,
      autoplay: false,
      navText: [
        '<div id="client_prev_button"><i class="fal fa-angle-left arrow_alignment"></i></div>',
        '<div id="client_next_button"><i class="fal fa-angle-right arrow_alignment"></i></div>',
      ],
    });

    //Client Slider Image Counter
    /*Increment*/
    var clicks = 1;
    $("#client_next_button").click(function () {
      if (clicks == 5) {
        clicks = 0;
      }
      clicks++;
      $(".figure").html(clicks);
    });
    /*Decrement*/
    $("#client_prev_button").click(function () {
      if (clicks == 1) {
        clicks = 6;
      }
      clicks--;
      $(".figure").html(clicks);
    });

    //Testimonials carousel
    var testimonials_carousel = $(".testimonials_carousel");
    testimonials_carousel.owlCarousel({
      smartSpeed: 2000,
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      touchDrag: true,
      slideBy: 1,
      mouseDrag: true,
      autoplay: false,
      // autoplayTimeout: 7000,
      navText: [
        '<i class="fal fa-angle-left arrow_alignment"></i>',
        '<i class="fal fa-angle-right arrow_alignment"></i>',
      ],
    });

    //Testimonial Profile carousel

    var thumbs = 3;

    var testimonial_thumb_content_slider = $(
      ".testimonial_thumb_content_slider"
    );
    var testimonial_thumb_content_slider_settings = {
      smartSpeed: 2000,
      center: true,
      items: thumbs,
      loop: true,
      margin: 10,
      dots: false,
      nav: false,
      touchDrag: true,
      slideBy: 1,
      mouseDrag: true,
      autoplay: false,
      // autoplayTimeout: 7000,
    };
    testimonial_thumb_content_slider
      .owlCarousel(testimonial_thumb_content_slider_settings)
      .on("click", ".owl-item", function () {
        /* If Loop is false active this 'i' */
        // var i = $(this).index() * testimonial_thumb_content_slider_settings.slideBy;

        /* If Loop is true active this 'i' */
        var i = $(this).index() - (thumbs + 1);
        testimonial_thumb_content_slider.trigger("to.owl.carousel", [
          i,
          1000,
          true,
        ]);
        testimonials_carousel.trigger("to.owl.carousel", [i, 800, true]);
      });

    /* Content Carousel Tigger */
    testimonials_carousel.on("click", ".owl-next", function () {
      testimonial_thumb_content_slider.trigger("next.owl.carousel");
    });
    testimonials_carousel.on("click", ".owl-prev", function () {
      testimonial_thumb_content_slider.trigger("prev.owl.carousel");
    });
    testimonials_carousel.on("dragged.owl.carousel", function (e) {
      testimonial_thumb_content_slider.trigger("to.owl.carousel", e.page.index);
    });

    /* Thum Carousel Tigger */
    testimonial_thumb_content_slider.on("click", ".owl-next", function () {
      testimonials_carousel.trigger("next.owl.carousel");
    });
    testimonial_thumb_content_slider.on("click", ".owl-prev", function () {
      testimonials_carousel.trigger("prev.owl.carousel");
    });
    testimonial_thumb_content_slider.on("dragged.owl.carousel", function (e) {
      /*--------------This item id is in index.html testimonial area before testimonial content row
       document.getElementById("value").innerHTML = e.item.index - (thumbs + 1);
       ------------------*/

      testimonials_carousel.trigger(
        "to.owl.carousel",
        e.item.index - (thumbs + 1)
      );
    });

    //Single Portfolio carousel
    var single_portfolio_carousel = $(".single_portfolio_carousel");
    single_portfolio_carousel.owlCarousel({
      items: 1,
      nav: true,
      slideBy: 1,
      smartSpeed: 2000,
      navText: [
        '<i class="fal fa-angle-left arrow_alignment"></i>',
        '<i class="fal fa-angle-right arrow_alignment"></i>',
      ],
    });

    var portfolio_carousel = $(".portfolio_carousel");
    portfolio_carousel.owlCarousel({
      loop: true,
      smartSpeed: 2000,
      items: 1,
      margin: 100,
      nav: true,
      navText: [
        '<i class="fal fa-angle-left arrow_alignment"></i>',
        '<i class="fal fa-angle-right arrow_alignment"></i>',
      ],
      responsive: {
        768: { items: 2 },
      },
    });

    //Current Class Activation
    var navbarcurrentmenuclass = $(".navbarcurrentmenuclass");
    navbarcurrentmenuclass.onePageNav();
  });

  //jquery load function start
  jQuery(window).on("load", function () {});

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // Video Plugin Activation
  var video_btn = $(".service_play_icon");
  video_btn.modalVideo();
})(jQuery);
