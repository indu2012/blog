jQuery(document).ready(function ($) {
  jQuery(".js-testimonials").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    autoplaySpeed: 2000,
    prevArrow:
      '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
    nextArrow:
      '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".slick-nav").on("click touch", function (e) {
    e.preventDefault();
    var arrow = $(this);
    if (!arrow.hasClass("animate")) {
      arrow.addClass("animate");
      setTimeout(() => {
        arrow.removeClass("animate");
      }, 1600);
    }
  });
});
