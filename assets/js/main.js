// JavaScript for Scroll Navbar Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".atel-header");
  const scrollThreshold = 40;

  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("atel-header-fixed");
  } else {
    navbar.classList.remove("atel-header-fixed");
  }
});

// PASSWORD ICONS TOGGLE
const passwordFormElem = $(".password-form-elem .form-elem-icon");
$(passwordFormElem).on("click", function (event) {
  const button = $(this);
  const input = button.siblings("input");

  if (input.attr("type") === "password") {
    input.attr("type", "text");
    $(button).addClass("show-password");
  } else {
    input.attr("type", "password");
    $(button).removeClass("show-password");
  }
});

// WHO WE HELP SLIDER
$(".who-we-help-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  arrows: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow:
    "<button type='button' class='slick-slider-btn slick-prev bg-white icon-52 border-grey-2-1 rounded-12'><img class='icon-24' src='./assets/icons/chevron_left_black.svg'></button>",
  nextArrow:
    "<button type='button' class='slick-slider-btn slick-next bg-white icon-52 border-grey-2-1 rounded-12'><img class='icon-24' src='./assets/icons/chevron_right_black.svg'></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
});
