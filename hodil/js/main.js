(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    //Sticky Navigationbar
    function stickyNav() {
      window.onscroll = function () {
        myFunction();
      };

      var navbar = document.getElementById("header");
      var sticky = navbar.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    }
    stickyNav();

    //Pre Loader
    function handlePreloader() {
      if ($(".preloader").length) {
        $(".preloader").delay(200).fadeOut(500);
      }
    }
    handlePreloader();

    //Chat Button Contact Form
    var chat_btn = $("#chat");
    var form_popup = $(".form_popup");
    var close_btn = $(".close_btn");
    chat_btn.on("click", function () {
      form_popup.addClass("active");
    });
    close_btn.on("click", function () {
      form_popup.removeClass("active");
    });
  });

  //jquery load function start
  jQuery(window).on("load", function () {});
})(jQuery);
