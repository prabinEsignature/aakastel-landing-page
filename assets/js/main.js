// JavaScript for Scroll Navbar Effect
const navbar = document.querySelector(".atel-header");
const scrollThreshold = 40;

// Function to handle the scroll effect
const handleScroll = () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("atel-header-fixed");
  } else {
    navbar.classList.remove("atel-header-fixed");
  }
};

// Initial check on page load
handleScroll();

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// NAVBAR MENU TOGGLE
const menuItems = document.querySelectorAll(".menu-item");
let activeSubMenu = null;
let activeMenuItem = null;

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const subMenuBlock = item.nextElementSibling;

    if (subMenuBlock === activeSubMenu) {
      subMenuBlock.classList.toggle("show");
      item.classList.toggle("active");
    } else {
      resetNavbarMenu();
      if (
        subMenuBlock &&
        subMenuBlock.classList.contains("submenu-item-block")
      ) {
        subMenuBlock.classList.add("show");
        item.classList.add("active");
        activeSubMenu = subMenuBlock;
        activeMenuItem = item;
      } else {
        activeSubMenu = null;
        activeMenuItem = null;
      }
    }
  });
});

const resetNavbarMenu = () => {
  document
    .querySelectorAll(".submenu-item-block")
    .forEach((subMenuBlock) => subMenuBlock.classList.remove("show"));

  document
    .querySelectorAll(".menu-item")
    .forEach((menuItem) => menuItem.classList.remove("active"));
};

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
});
