(function ($) {
  ("use strict");
  // Users can skip the loading process if they want.

  // lightcase
  $(function () {
    $("a[data-rel^=lightcase]").lightcase();
  });

  // Will wait for everything on the page to load.
  $(window).bind("load", function () {
    $(".preloder-overlay, body").addClass("loaded");
    setTimeout(function () {
      $(".preloder-overlay").css({
        display: "none",
      });
    }, 3000);
  });

  //menu options
  var fixed_top = $(".header");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      fixed_top.addClass("animated fadeInDown menu-fixed");
    } else {
      fixed_top.removeClass("animated fadeInDown menu-fixed");
    }
  });

  // scroll up start here
  $(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".scrollToTop").css({
          bottom: "5%",
          opacity: "1",
          transition: "all 0.5s ease",
        });
      } else {
        $(".scrollToTop").css({
          bottom: "-30%",
          opacity: "0",
          transition: "all .5s ease",
        });
      }
    });

    // search & cart option
    $(document).on("click", ".cart-button > a", function () {
      $(".cart-button").toggleClass("open");
    });

    $(document).on(
      "click",
      ".search-button, .search-close, .search-close-overlay",
      function () {
        $(".search-input").toggleClass("open");
      }
    );

    //Click event to scroll to top
    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
  });

  $(".header-bar").on("click", function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });

  // header top show and hide
  $(".ellepsis-bar").on("click", function (e) {
    var element = $(".header__top");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.slideUp(300, "swing");
      $(".overlay").removeClass("active");
    } else {
      element.addClass("open");
      element.slideDown(300, "swing");
      $(".overlay").addClass("active");
    }
  });

  $(".ellepsis-bar ").on("click", function () {
    $(this).toggleClass("active");
  });

  // menu add border top
  $(".menu li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });

  // flag icon change
  $("#language").change(function () {
    image = $("option:selected", this).data("image");
    $(".active").removeClass("active");
    $(image).addClass("active");
  });

  // cart remove
  $(function () {
    $(".cart-btn").on("click", function (e) {
      e.preventDefault();
      $(this).parent().hide(400);
    });
  });

  // banner slider
  var swiper = new Swiper(".home-slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: true,
  });

  // features__slider
  var swiper = new Swiper(".features__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    keyboard: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".features-button-next",
      prevEl: ".features-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
  // add class current on   features__slider navigation button
  $(".features-button-next").addClass("current");
  $(".features-slider-button > .features-buttons").on("click", function (e) {
    e.preventDefault();
    $(".features-slider-button > .features-buttons.current").removeClass(
      "current"
    );
    $(this).addClass("current");
  });

  // award-layer__slider
  var swiper = new Swiper(".award-layer__slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    keyboard: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  // revew slider
  var swiper = new Swiper(".testimonial__content-revews-thumb", {
    loop: false,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper,
    },
    breakpoints: {
      1024: {
        spaceBetween: -80,
      },
      992: {
        spaceBetween: -60,
      },
    },
  });
  var swiper2 = new Swiper(".testimonial__content-revews-content", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // sponser - slider

  var swiper = new Swiper(".sponser-slider", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 7,
      },
    },
  });

  // case-study__slider
  var swiper = new Swiper(".case-study__slider", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //counterup
  $(window).on("scroll", function () {
    $(".counter").data("countToOptions", {
      formatter: function (value, options) {
        return value
          .toFixed(options.decimals)
          .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
      },
    });
    // start all the timers
    $(".counter").each(count);
    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data("countToOptions") || {});
      $this.countTo(options);
    }
  });

  // branch office swiperlider
  var swiper = new Swiper(".office__slider", {
    slidesPerView: 4,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });

  // slider navigation button color change
  $(".swiper-button-next").addClass("current");
  $(".swiper > .swiper-button-next,.swiper > .swiper-button-prev").on(
    "click",
    function (e) {
      e.preventDefault();
      $(
        ".swiper > .swiper-button-next,.swiper > .swiper-button-prev.current, .swiper > .swiper-button-next,.swiper > .swiper-button-prev.current"
      ).removeClass("current");
      $(this).addClass("current");
    }
  );

  // blog__slider;
  var swiper = new Swiper(".blog__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".swiper-pagination-bullet").hover(function () {
    $(this).trigger("click");
  });

  // wow js initialization
  new WOW().init();
})(jQuery);
