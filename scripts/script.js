/* the viewport is less than 700 pixels wide */
function mobileOnlySlider() {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    easing: "linear",
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: false,
  });
}
if (window.innerWidth < 700) {
  mobileOnlySlider();
}

$(window).resize(function (e) {
  if (window.innerWidth < 700) {
    if (!$(".slider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    if ($(".slider").hasClass("slick-initialized")) {
      $(".slider").slick("unslick");
    }
  }
});


//tooltip

document.querySelector(".itemCard__shareTxt").onclick = () => {
  let tooltip = document.querySelector(".itemCard__socialMedia2");
  tooltip.style.display = "block";
};
document.querySelector(".itemCard__closeImg").onclick = () => {
  let tooltip = document.querySelector(".itemCard__socialMedia2");
  tooltip.style.display = "none";
};