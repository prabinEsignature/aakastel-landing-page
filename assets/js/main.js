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

// SIDEBAR TOGGLE
const navbarSideMenuOpenBtn = document.querySelector(".btn-navbar-menu-open");
const navbarSideMenuCloseBtn = document.querySelector(".btn-navbar-menu-close");
const navbarMenuParent = document.querySelector(".atel-navbar-menu-parent");
navbarSideMenuOpenBtn.addEventListener("click", () => {
  navbarMenuParent.classList.add("show");
});
navbarSideMenuCloseBtn.addEventListener("click", () => {
  navbarMenuParent.classList.remove("show");
});

// NAVBAR MENU TOGGLE
const menuItems = document.querySelectorAll(".menu-item");
let activeSubMenu = null;
let activeMenuItem = null;
let leaveTimeout;

menuItems.forEach((item) => {
  const subMenuBlock = item.nextElementSibling;

  // item.addEventListener("mouseenter", () => {
  //   clearTimeout(leaveTimeout);
  //   resetNavbarMenu();

  //   if (subMenuBlock && subMenuBlock.classList.contains("submenu-item-block")) {
  //     subMenuBlock.classList.add("show");
  //     item.classList.add("active");
  //     activeSubMenu = subMenuBlock;
  //     activeMenuItem = item;
  //   }
  // });

  // item.addEventListener("mouseleave", () => {
  //   leaveTimeout = setTimeout(() => {
  //     if (subMenuBlock) {
  //       subMenuBlock.classList.remove("show");
  //       item.classList.remove("active");
  //       activeSubMenu = null;
  //       activeMenuItem = null;
  //     }
  //   }, 100); // Adjust delay time as needed
  // });
});

// Close the menu when clicking outside
// document.addEventListener("click", (event) => {
//   // Check if the click target is not within the active menu item or submenu
//   if (
//     activeMenuItem &&
//     !activeMenuItem.contains(event.target) &&
//     activeSubMenu &&
//     !activeSubMenu.contains(event.target)
//   ) {
//     resetNavbarMenu();
//     activeSubMenu = null;
//     activeMenuItem = null;
//   }
// });

// Reset function to clear all active menus
// const resetNavbarMenu = () => {
//   document
//     .querySelectorAll(".submenu-item-block")
//     .forEach((subMenuBlock) => subMenuBlock.classList.remove("show"));

//   document
//     .querySelectorAll(".menu-item")
//     .forEach((menuItem) => menuItem.classList.remove("active"));
// };

const subMenuHeadItems = document.querySelectorAll(".submenu-01-head-item");
const subMenuBodyItems = document.querySelectorAll(".submenu-01-body-item");

if (subMenuBodyItems.length > 0) {
  subMenuBodyItems[0].classList.add("show");
}

subMenuHeadItems.forEach((subMenuHeadItem, index) => {
  subMenuHeadItem.addEventListener("mouseenter", () => {
    subMenuBodyItems.forEach((bodyItem) => bodyItem.classList.remove("show"));

    subMenuBodyItems[index].classList.add("show");
  });

  subMenuHeadItem.addEventListener("mouseleave", () => {
    subMenuBodyItems.forEach((bodyItem) => bodyItem.classList.remove("show"));
    subMenuBodyItems[0].classList.add("show");
  });
});

const subMenuHeadItemsLink = document.querySelectorAll(
  ".submenu-01-head-list a.submenu-item"
);

subMenuHeadItemsLink.forEach((subMenuHeadItemLink, index) => {
  subMenuHeadItemLink.addEventListener("click", (event) => {
    event.preventDefault();

    document
      .querySelectorAll(".submenu-grid-sp-wrapper.show")
      .forEach((openMenu) => {
        if (
          openMenu !==
          subMenuHeadItemLink.parentElement.querySelector(
            ".submenu-grid-sp-wrapper"
          )
        ) {
          openMenu.classList.remove("show");
        }
      });

    const subMenuHeadItemGrid = subMenuHeadItemLink.parentElement.querySelector(
      ".submenu-grid-sp-wrapper"
    );
    subMenuHeadItemGrid.classList.toggle("show");
  });
});

const submenuGridBtnTtl = document.querySelectorAll(".submenu-grid-ttl-btn");
submenuGridBtnTtl.forEach((submenuGridBtnTtl, index) => {
  submenuGridBtnTtl.addEventListener("click", (event) => {
    event.preventDefault();
    document
      .querySelectorAll(".solutions-nav .submenu-grid-list.show")
      .forEach((openMenu) => {
        if (
          openMenu !==
          submenuGridBtnTtl.parentElement.querySelector(".submenu-grid-list")
        ) {
          openMenu.classList.remove("show");
        }
      });
    const subMenuGridListBlock =
      submenuGridBtnTtl.parentElement.querySelector(".submenu-grid-list");
    subMenuGridListBlock.classList.toggle("show");
  });
});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
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

// AUDIO PLAYER
const audio = document.querySelector(".audio-play-file");
const playButton = document.querySelector(".audio-play-btn");
const playIcon = playButton?.querySelector("img");
const progressBarContainer = document.querySelector(".audio-play-progress");
const progressBar = document.querySelector(".audio-play-progress-bar");
const timeDisplay = document.querySelector(".audio-play-time");
const volumeButton = document.querySelector(".audio-vol-btn");
const volumeIcon = volumeButton?.querySelector("img");
const dotsButton = document.querySelector('.audio-dots-btn');
const dropdown = document.querySelector('.audio-options-dropdown');
const downloadOption = document.getElementById('download-option');
const speedOption = document.getElementById('speed-option');
const loopOption = document.getElementById('loop-option');

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${secs}`;
};

playButton?.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playIcon.src = "assets/icons/play_white.svg"; // Change to pause icon
  } else {
    audio.pause();
    playIcon.src = "assets/icons/play_white.svg"; // Change back to play icon
  }
});

// Update progress bar and time display as audio plays
audio?.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressPercent = (currentTime / duration) * 100;

  progressBar.style.width = `${progressPercent}%`;
  timeDisplay.textContent = formatTime(currentTime);
});

// Seek functionality when clicking on progress bar
progressBarContainer?.addEventListener("click", (e) => {
  const clickX = e.offsetX;
  const width = progressBarContainer.clientWidth;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});

// Volume control toggle (mute/unmute)
volumeButton?.addEventListener("click", () => {
  audio.muted = !audio.muted;
  volumeIcon.src = audio.muted
    ? "assets/icons/volume_grey.svg" // Change to muted icon
    : "assets/icons/volume_grey.svg"; // Change back to volume icon
});

// Toggle dropdown visibility
dotsButton?.addEventListener('click', () => {
  dropdown.classList.toggle('d-none');
});

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
  if (!dotsButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add('d-none');
  }
});

// Download audio file
downloadOption?.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = audio.querySelector('source').src;
  link.download = './assets/audio/banner_audio.mp4';
  link.click();
  dropdown.classList.add('d-none');
});

// Toggle loop functionality
let isLooping = false;
loopOption?.addEventListener('click', () => {
  isLooping = !isLooping;
  audio.loop = isLooping;
  loopOption.textContent = isLooping ? 'Disable Loop' : 'Enable Loop';
  dropdown.classList.add('d-none');
});

// Adjust playback speed
speedOption?.addEventListener('click', () => {
  let currentSpeed = audio.playbackRate;
  const newSpeed = currentSpeed === 1 ? 1.5 : currentSpeed === 1.5 ? 2 : 1;
  audio.playbackRate = newSpeed;
  speedOption.textContent = `Speed: ${newSpeed}x`;
  dropdown.classList.add('d-none');
});

// // MATCH HEIGHT
// function setEqualHeights() {
//   const planBlockHeads = document.querySelectorAll(".plan-block-head");
//   const planLabelItems = document.querySelectorAll(".plan-label-item");
//   const planLabelInfos = document.querySelectorAll(".plan-label-info");

//   // Reset heights to auto
//   [...planBlockHeads, ...planLabelItems, ...planLabelInfos].forEach((el) => {
//     el.style.height = "auto";
//   });

//   // Delay for DOM rendering
//   setTimeout(() => {
//     // Calculate maximum height for each group of elements
//     let maxLabelHeight = 0;

//     planLabelItems.forEach((item, index) => {
//       const labelHeight = planLabelItems[index].getBoundingClientRect().height;
//       const infoHeight = planLabelInfos[index].getBoundingClientRect().height;
//       maxLabelHeight = Math.max(maxLabelHeight, labelHeight, infoHeight);
//     });

//     // Apply the max height to both planLabelItems and planLabelInfos
//     planLabelItems.forEach((item) => {
//       item.style.height = `${maxLabelHeight}px`;
//     });
//     planLabelInfos.forEach((info) => {
//       info.style.height = `${maxLabelHeight}px`;
//     });

//     // Calculate maximum height for planBlockHeads
//     const maxHeadHeight = Math.max(
//       ...[...planBlockHeads].map((head) => head.getBoundingClientRect().height)
//     );

//     // Apply the max height to all planBlockHeads
//     planBlockHeads.forEach((head) => {
//       head.style.height = `${maxHeadHeight}px`;
//     });
//   }, 100); // Adjust delay if necessary
// }

// // Attach event listeners
// window.addEventListener("load", () => {
//   setTimeout(setEqualHeights, 150);
// });
// window.addEventListener("resize", setEqualHeights);

$(document).ready(function () {
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
      {
        breakpoint: 576,
        settings: {
          variableWidth: false,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  AOS.init({});
});
