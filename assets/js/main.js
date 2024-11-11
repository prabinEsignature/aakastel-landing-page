/* ####### FIXED NAVBAR EFFECT AFTER SCROLL ####### */
const navbar = document.querySelector(".atel-header");
const scrollThreshold = 40;

const handleScroll = () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("atel-header-fixed");
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("atel-header-fixed");
    navbar.classList.remove("shadow-sm");
  }
};

handleScroll();
window.addEventListener("scroll", handleScroll);
/* ####### EOF FIXED NAVBAR EFFECT AFTER SCROLL ####### */

/* ####### SIDEBAR TOGGLE ####### */
const navbarSideMenuOpenBtn = document.querySelector(".btn-navbar-menu-open");
const navbarSideMenuCloseBtn = document.querySelector(".btn-navbar-menu-close");
const navbarMenuParent = document.querySelector(".atel-navbar-menu-parent");
navbarSideMenuOpenBtn.addEventListener("click", () => {
  navbarMenuParent.classList.add("show");
});

navbarSideMenuCloseBtn.addEventListener("click", () => {
  navbarMenuParent.classList.remove("show");
});
/* ####### EOF SIDEBAR TOGGLE ####### */

/* ####### NAVBAR MENU TOGGLE ####### */
const menuItems = document.querySelectorAll(".menu-item");
let activeSubMenu = null;
let activeMenuItem = null;

menuItems.forEach((menuItem) => {
  const subMenuBlock = menuItem.querySelector(".submenu-item-block");

  // Prevent clicks inside submenu-item-block from triggering the parent menuItem event
  if (subMenuBlock) {
    subMenuBlock.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  menuItem.addEventListener("click", () => {
    if (subMenuBlock === activeSubMenu) {
      subMenuBlock.classList.toggle("show");
      menuItem.classList.toggle("active");
    } else {
      resetNavbarMenu();
      if (subMenuBlock) {
        subMenuBlock.classList.add("show");
        menuItem.classList.add("active");
        activeSubMenu = subMenuBlock;
        activeMenuItem = menuItem;
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
/* ####### EOF NAVBAR MENU TOGGLE ####### */

/* ####### NAVBAR SUBMENU TOGGLE - PRODUCTS SUBMENU ####### */
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
});

const subMenuHeadItemsLink = document.querySelectorAll(
  ".submenu-01-head-list a.submenu-item"
);

subMenuHeadItemsLink.forEach((subMenuHeadItemLink, index) => {
  subMenuHeadItemLink.addEventListener("click", (event) => {
    document
      .querySelectorAll(".submenu-01-head-list .submenu-grid-sp-wrapper.show")
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
/* ####### EOF NAVBAR SUBMENU TOGGLE - PRODUCTS SUBMENU ####### */

/* ####### NAVBAR SUBMENU TOGGLE - SOLUTIONS SUBMENU ####### */
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

/* ####### EOF NAVBAR SUBMENU TOGGLE - PRODUCTS SUBMENU ####### */

/* ####### NAVBAR SUBMENU TOGGLE - DEVELOPERS PRODUCTS SUBMENU ####### */
document.addEventListener("DOMContentLoaded", () => {
  const subMenuHeadItems3 = document.querySelectorAll(".submenu-03-head-item");
  const subMenuBodyItems3 = document.querySelectorAll(".submenu-03-body-item");

  if (subMenuBodyItems3.length > 0) {
    subMenuBodyItems3[0].classList.add("show");
  }

  subMenuHeadItems3.forEach((subMenuHeadItem, index) => {
    subMenuHeadItem.addEventListener("mouseenter", () => {
      subMenuBodyItems3.forEach((bodyItem) =>
        bodyItem.classList.remove("show")
      );
      subMenuBodyItems3[index].classList.add("show");
    });
  });

  const subMenuHeadItemsLink3 = document.querySelectorAll(
    ".submenu-03-head-list .submenu-03-head-item .submenu-grid-item-link"
  );

  subMenuHeadItemsLink3.forEach((subMenuHeadItemLink, index) => {
    subMenuHeadItemLink.addEventListener("click", (event) => {
      document
        .querySelectorAll(".submenu-03-head-list .submenu-grid-sp-wrapper.show")
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

      const subMenuHeadItemGrid =
        subMenuHeadItemLink.parentElement.querySelector(
          ".submenu-grid-sp-wrapper"
        );
      subMenuHeadItemGrid.classList.toggle("show");
    });
  });
});
/* ####### EOF NAVBAR SUBMENU TOGGLE - PRODUCTS SUBMENU ####### */

/* ####### TRANSITION & ANIMATION STOPPER ON RESIZE ####### */
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
/* ####### EOF TRANSITION & ANIMATION STOPPER ON RESIZE ####### */

/* ####### PASSWORD SHOW/HIDE ####### */
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
/* ####### EOF PASSWORD SHOW/HIDE ####### */

/* ####### CUSTOM AUDIO PLAYER ####### */
const audio = document.querySelector(".audio-play-file");
const playButton = document.querySelector(".audio-play-btn");
const playIcon = playButton?.querySelector("img");
const progressBarContainer = document.querySelector(".audio-play-progress");
const progressBar = document.querySelector(".audio-play-progress-bar");
const timeDisplay = document.querySelector(".audio-play-time");
const volumeButton = document.querySelector(".audio-vol-btn");
const volumeIcon = volumeButton?.querySelector("img");
const dotsButton = document.querySelector(".audio-dots-btn");
const dropdown = document.querySelector(".audio-options-dropdown");
const downloadOption = document.getElementById("download-option");
const speedOption = document.getElementById("speed-option");
const loopOption = document.getElementById("loop-option");

// TIME FORMATING FOR AUDIO PLAY
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${secs}`;
};

// PLAY/PAUSE AUDIO
playButton?.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playIcon.src = "assets/icons/pause_white.svg";
  } else {
    audio.pause();
    playIcon.src = "assets/icons/play_white.svg";
  }
});

// UPDATE PROGRESS BAR AND TIME DISPLAY AS AUDIO PLAYS
audio?.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  timeDisplay.textContent = formatTime(currentTime);
});

// SEEK FUNCTIONALITY WHEN CLICKING ON PROGRESS BAR
progressBarContainer?.addEventListener("click", (e) => {
  const clickX = e.offsetX;
  const width = progressBarContainer.clientWidth;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

// VOLUME CONTROL TOGGLE(MUTE/UNMUTE)
volumeButton?.addEventListener("click", () => {
  audio.muted = !audio.muted;
  volumeIcon.src = audio.muted
    ? "assets/icons/muted_grey.svg"
    : "assets/icons/volume_grey.svg";
});

// TOGGLE DROPDOWN VISIBILITY
dotsButton?.addEventListener("click", () => {
  dropdown?.classList.toggle("d-none");
});

// CLOSE DROPDOWN IF CLICKED OUTSIDE
document.addEventListener("click", (event) => {
  if (
    !dotsButton?.contains(event.target) &&
    !dropdown?.contains(event.target)
  ) {
    dropdown?.classList.add("d-none");
  }
});

// DOWNLOAD AUDIO FILE
downloadOption?.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = audio.querySelector("source").src;
  link.download = "./assets/audio/banner_audio.mp4";
  link.click();
  dropdown.classList.add("d-none");
});

// TOGGLE LOOP FUNCTIONALITY
let isLooping = false;
loopOption?.addEventListener("click", () => {
  isLooping = !isLooping;
  audio.loop = isLooping;
  loopOption.textContent = isLooping ? "Disable Loop" : "Enable Loop";
  dropdown.classList.add("d-none");
});

// ADJUST PLAYBACK SPEED
speedOption?.addEventListener("click", () => {
  let currentSpeed = audio.playbackRate;
  const newSpeed = currentSpeed === 1 ? 1.5 : currentSpeed === 1.5 ? 2 : 1;
  audio.playbackRate = newSpeed;
  speedOption.textContent = `Speed: ${newSpeed}x`;
  dropdown.classList.add("d-none");
});
/* ####### EOF CUSTOM AUDIO PLAYER ####### */

// document.querySelectorAll('.accordion-button').forEach(button => {
//   button.addEventListener('mouseover', () => {
//       // Close all accordion panels
//       document.querySelectorAll('.accordion-collapse').forEach(collapse => {
//           if (collapse.classList.contains('show')) {
//               new bootstrap.Collapse(collapse, { toggle: true });
//           }
//       });

//       // Open the targeted accordion panel
//       const target = document.querySelector(button.getAttribute('data-bs-target'));
//       if (!target.classList.contains('show')) {
//           new bootstrap.Collapse(target, { show: true });
//       }
//   });

//   button.addEventListener('mouseleave', () => {
//       // Close the current item when mouse leaves
//       const target = document.querySelector(button.getAttribute('data-bs-target'));
//       new bootstrap.Collapse(target, { hide: true });
//   });
// });

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

/* ####### JQUERY BASED PLUGINGS ####### */
$(document).ready(function () {
  // SLICK SLIDER
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

  // ANIMATE ON SCROLL (AOS)
  AOS.init({});
});

/* ####### PRESENCE MAP - DISTRICT MAPPING ####### */
const zoomScale = 1;
const svgElement = document.getElementById("nepal-map");
const presenceInfoDiv = document.getElementById("presence-info");

const changePathColor = (locationId) => {
  const color = "#3bb24a";
  const path = document.getElementById(locationId);

  if (path) {
    path.style.fill = color;
    const bbox = path.getBBox();

    // Get scale factors between viewBox and actual displayed size
    const svgRect = svgElement.getBoundingClientRect();
    const viewBoxWidth = svgElement.viewBox.baseVal.width;
    const viewBoxHeight = svgElement.viewBox.baseVal.height;
    const xScale = svgRect.width / viewBoxWidth;
    const yScale = svgRect.height / viewBoxHeight;

    // Scale the bounding box to match actual display size
    const xOffset = (1 - zoomScale) * (bbox.x + bbox.width / 2) * xScale;
    const yOffset = (1 - zoomScale) * (bbox.y + bbox.height / 2) * yScale;
    path.setAttribute(
      "transform",
      `translate(${xOffset}, ${yOffset}) scale(${zoomScale})`
    );

    placeDivAtPathPosition(bbox, xScale, yScale);
  }
};

const resetPathColor = () => {
  const paths = document.querySelectorAll("svg path");
  paths.forEach((path) => {
    path.style.fill = "#C7E1E5";
    path.setAttribute("transform", "");
  });
};

function placeDivAtPathPosition(bbox, xScale, yScale) {
  // Calculate the center of the path, scaled for the displayed SVG
  const x = (bbox.x + bbox.width / 2) * xScale;
  const y = (bbox.y + bbox.height / 2) * yScale;

  presenceInfoDiv.style.left = `${x - 100}px`;
  presenceInfoDiv.style.top = `${y + bbox.height * yScale}px`;
  presenceInfoDiv.style.position = "absolute";
  presenceInfoDiv.classList.remove("d-none");
}

const locationItems = document.querySelectorAll(".presence-location-name");
locationItems.forEach((locationItem) => {
  locationItem.addEventListener("click", () => {
    const dataLocationId = locationItem.getAttribute("data-location-id");
    resetPathColor();
    changePathColor(dataLocationId);
  });
});
/* ####### EOF PRESENCE MAP - DISTRICT MAPPING ####### */

/* ####### VIDEO PLAY/PAUSE FEATURE ####### */
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video-container video");
  const videoContainer = document.querySelector(".video-container");
  const playPauseBtn = document.querySelector(".vid-play-pause-btn");
  const playIcon = "assets/icons/play_large_white.svg";
  const pauseIcon = "assets/icons/pause_white.svg";

  function togglePlayPause() {
    if (video.paused || video.ended) {
      video.play();
      // playPauseBtn.classList.add("d-none");
      playPauseBtn.querySelector("img").src = pauseIcon;
    } else {
      video.pause();
      // playPauseBtn.classList.remove("d-none");
      playPauseBtn.querySelector("img").src = playIcon;
    }
  }

  playPauseBtn?.addEventListener("click", togglePlayPause);
});
/* ####### EOF VIDEO PLAY/PAUSE FEATURE ####### */

var StackCards = function (element) {
  this.element = element;
  this.items = this.element.getElementsByClassName("key-products-block d-grid");
  this.scrollingListener = false;
  this.scrolling = false;
  this.atelKeyProducts = document.querySelector(".atel-key-products"); // The sticky div
  this.atelKeyProductsWrapper = document.querySelector(
    ".atel-key-products-wrapper"
  ); // Wrapper to control scroll
  this.stickyTop = 130; // The sticky top position when scrolling should be allowed
  this.lastScrollTop = 0; // Track last scroll position for scroll direction
  this.init();
};

StackCards.prototype.init = function () {
  // Use Intersection Observer to trigger animation
  var observer = new IntersectionObserver(stackCardsCallback.bind(this));
  observer.observe(this.element);
};

function stackCardsCallback(entries) {
  if (entries[0].isIntersecting) {
    // Cards inside viewport - add scroll listener
    if (this.scrollingListener) return; // Listener for scroll event already added
    stackCardsInitEvent(this);
  } else {
    // Cards not inside viewport - remove scroll listener
    if (!this.scrollingListener) return; // Listener for scroll event already removed
    window.removeEventListener("scroll", this.scrollingListener);
    this.scrollingListener = false;
  }
}

function stackCardsInitEvent(element) {
  element.scrollingListener = stackCardsScrolling.bind(element);
  window.addEventListener("scroll", element.scrollingListener);
}

function stackCardsScrolling() {
  var currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  var scrollDirection = currentScrollTop > this.lastScrollTop ? "down" : "up";
  this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll

  // Get the position of the parent sticky div
  var parentTop = this.atelKeyProducts.getBoundingClientRect().top;

  // Check if .atel-key-products has reached the sticky position (top of the viewport)
  if (parentTop <= this.stickyTop) {
    // Allow scroll on .atel-key-products-wrapper once .atel-key-products touches the top
    this.atelKeyProductsWrapper.style.overflow = "auto"; // Enable scrolling

    // Scroll down logic: Enable scroll only after .atel-key-products is at the top
    if (scrollDirection === "down") {
      if (!this.scrolling) {
        this.scrolling = true;
        window.requestAnimationFrame(animateStackCards.bind(this));
      }
    }
  } else {
    // Disable scroll if .atel-key-products has not reached the top
    this.atelKeyProductsWrapper.style.overflow = "hidden"; // Disable scrolling
  }

  // Scroll up logic (optional): You can control this if necessary, e.g., reset scroll state
  if (scrollDirection === "up") {
    this.scrolling = false;
    window.requestAnimationFrame(animateStackCards.bind(this));
  }
}

function animateStackCards() {
  var top = this.element.getBoundingClientRect().top;
  var offsetTop = 100,
    cardHeight = 300,
    marginY = 15;

  for (var i = 0; i < this.items.length; i++) {
    var scrolling = offsetTop - top - i * (cardHeight + marginY);
  }

  this.scrolling = false;
}

// Initialize the StackCards on both sections
var stackCards = document.getElementsByClassName("card-deck-js");
var intersectionObserverSupported =
  "IntersectionObserver" in window && "IntersectionObserverEntry" in window;

if (stackCards.length > 0 && intersectionObserverSupported) {
  for (var i = 0; i < stackCards.length; i++) {
    new StackCards(stackCards[i]);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".submenu-item").forEach(function (item) {
    // Attach the event listener to the chevron element within each submenu-item
    item
      .querySelector(".submenu-item-chevron")
      .addEventListener("click", function (event) {
        if (window.innerWidth <= 991.98) {
          // Prevent the <a> tag click event
          event.stopPropagation();
          event.preventDefault(); // Prevents the link navigation
        }
      });

    // Attach a separate event listener for the text span to ensure it functions as a link
    item
      .querySelector(".submenu-item-text")
      .addEventListener("click", function (event) {
        // Only allow the link behavior on smaller screens
        if (window.innerWidth <= 991.98) {
          event.stopPropagation(); // Ensures only the text click triggers the link
        }
      });
  });

  // Optionally, add resize listener to adjust behavior on screen size change
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991.98) {
      // On larger screens, remove any effects if they exist (in case of dynamic updates)
      document
        .querySelectorAll(".submenu-item-chevron")
        .forEach(function (chevron) {
          chevron.removeEventListener("click", function (event) {
            event.stopPropagation();
            event.preventDefault();
          });
        });
    }
  });
});

subMenuHeadItemsLink.forEach((subMenuHeadItemLink) => {
  const chevronButton = subMenuHeadItemLink.querySelector(
    ".submenu-item-chevron"
  );

  chevronButton.addEventListener("click", (event) => {
    if (window.innerWidth <= 991.98) {
      event.stopPropagation();
      event.preventDefault();

      document
        .querySelectorAll(".submenu-01-head-list .submenu-grid-sp-wrapper.show")
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

      const subMenuHeadItemGrid =
        subMenuHeadItemLink.parentElement.querySelector(
          ".submenu-grid-sp-wrapper"
        );
      subMenuHeadItemGrid.classList.toggle("show");
    }
  });
});
