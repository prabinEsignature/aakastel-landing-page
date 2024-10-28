// JavaScript for Scroll Navbar Effect
const navbar = document.querySelector(".atel-header");
const scrollThreshold = 40;

// Function to handle the scroll effect
const handleScroll = () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("atel-header-fixed");
    navbar.classList.add("shadow-default");
  } else {
    navbar.classList.remove("atel-header-fixed");
    navbar.classList.remove("shadow-default");
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

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
  // Check if the click target is not within the active menu item or submenu
  if (
    activeMenuItem &&
    !activeMenuItem.contains(event.target) &&
    activeSubMenu &&
    !activeSubMenu.contains(event.target)
  ) {
    resetNavbarMenu();
    activeSubMenu = null;
    activeMenuItem = null;
  }
});

const resetNavbarMenu = () => {
  document
    .querySelectorAll(".submenu-item-block")
    .forEach((subMenuBlock) => subMenuBlock.classList.remove("show"));

  document
    .querySelectorAll(".menu-item")
    .forEach((menuItem) => menuItem.classList.remove("active"));
};

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

// document.addEventListener("scroll", () => {
//   const sections = document.querySelectorAll(".features-tabs-item");
//   const navLinks = document.querySelectorAll(".features-tabs-btn");

//   let currentSection = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (window.scrollY >= sectionTop - sectionHeight / 5) {
//       currentSection = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href").substring(1) === currentSection) {
//       link.classList.add("active");
//     }
//   });
// });

// JavaScript for smooth scrolling with offset adjustment
document.querySelectorAll(".features-tabs li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const headerOffset = 110;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// WHO WE HELP SLIDER
$(".who-we-help-slider, .sms-service-slider").slick({
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
        dots: true,
      },
    },
  ],
});
