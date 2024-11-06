/* ####### FIXED NAVBAR EFFECT AFTER SCROLL ####### */
const navbar = document.querySelector(".atel-header");
const scrollThreshold = 40;

const handleScroll = () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("atel-header-fixed");
    navbar.classList.add("shadow-default");
  } else {
    navbar.classList.remove("atel-header-fixed");
    navbar.classList.remove("shadow-default");
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
      event.preventDefault();

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
    playIcon.src = "assets/icons/play_white.svg";
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
    ? "assets/icons/volume_grey.svg"
    : "assets/icons/volume_grey.svg";
});

// TOGGLE DROPDOWN VISIBILITY
dotsButton?.addEventListener("click", () => {
  dropdown.classList.toggle("d-none");
});

// CLOSE DROPDOWN IF CLICKED OUTSIDE
document.addEventListener("click", (event) => {
  if (!dotsButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("d-none");
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

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".atel-key-products-wrapper");
  const stickySection = document.querySelector(".atel-key-products");
  let lastScrollTop = 0; // Variable to keep track of the last scroll position

  const handleScroll = (event) => {
    const rect = stickySection.getBoundingClientRect();
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;

    // Check if the sticky section is exactly at the top position of 140px
    const isStickyAt140px = Math.abs(rect.top - 140) < 1; // Allow a small margin of error for calculations

    if (isStickyAt140px && rect.bottom > 0) {
      wrapper.style.pointerEvents = "auto";
      event.preventDefault(); // Prevent default scrolling behavior when sticky section is at 140px

      // If scrolling up and the sticky section has been crossed
      if (currentScrollTop < lastScrollTop) {
        // Reset scroll position to top
        wrapper.scrollTop = 0;
      }
    } else {
      wrapper.style.pointerEvents = "none";
      // If the sticky section is not at 140px, prevent scrolling
    }

    // Update lastScrollTop to current scroll position
    lastScrollTop = currentScrollTop;
  };

  // Initial call to set the correct state
  handleScroll({ preventDefault: () => {} });

  // Add scroll event listener to the window
  window.addEventListener("scroll", handleScroll, { passive: false });
});

/* ####### PRESENCE MAP - DISTRICT MAPPING ####### */
const zoomScale = 1.5;
const svgElement = document.getElementById("nepal-map");
const presenceInfoDiv = document.getElementById("presence-info");

const changePathColor = (locationId) => {
  const color = "#3bb24a";  
  const path = document.getElementById(locationId);

  if (path) {
    path.style.fill = color;
    const bbox = path.getBBox();
    const xOffset = (1 - zoomScale) * (bbox.x + bbox.width / 2);
    const yOffset = (1 - zoomScale) * (bbox.y + bbox.height / 2);
    path.setAttribute(
      "transform",
      `translate(${xOffset}, ${yOffset}) scale(${zoomScale})`
    );

    placeDivAtPathPosition(bbox);
  }
};

const resetPathColor = () => {
  const paths = document.querySelectorAll("svg path");
  paths.forEach((path) => {
    path.style.fill = "#C7E1E5";  
    path.setAttribute("transform", "");
  });
};

function placeDivAtPathPosition(bbox) {
  // Calculate the center of the path
  const x = bbox.x + bbox.width / 2;
  const y = bbox.y + bbox.height / 2;
  presenceInfoDiv.style.left = `${x - 100}px`;
  presenceInfoDiv.style.top = `${y + bbox.height}px`;
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
