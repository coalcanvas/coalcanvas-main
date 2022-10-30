var className = [
  "icon ion-ios-home-outline",
  "fa-thin fa-square-bolt",
  "fa-thin fa-toolbox",
  "fa-thin fa-photo-film",
  "fa-thin fa-message-middle",
  "fa-thin fa-vr-cardboard",
  "icon ion-ios-home-outline",
];
var labels = ["home", "products", "timeline", "book", "connect", "reel"];
var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  direction: "vertical",
  speed: 850,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        `
        <span class=` +
        className +
        `>` +
        labels[index] +
        `
      </span>`
      );
    },
    parallax: true,
    loop: true,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    allowSlidePrev: false,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-prev",
    },
    scrollbar: { el: ".swiper-scrollbar" },
  },
});

window.onload = loadSwip();
function loadSwip() {
  var l = document.createElement("style");
  l.innerHTML = `

.swiper {
    width: 100%;
    height: 100vh;
}

div.swiper {
    background: none !important;
}

@keyframes s-appear {
    0% {
        opacity: 0.05 !important;
        visibility: visible !important;
        transform: translateZ(-6.7rem) translateY(0px) !important;
        -webkit-transform: translateZ(-6.7rem) translateY(0px) !important;
    }
    25% {
        opacity: 0.05 !important;
        visibility: visible !important;
    }
    50% {
        opacity: 0.05 !important;
    }
    95% {
        opacity: 0.05 !important;
    }
    100% {
        opacity: 0.01 !important;
        visibility: visible !important;
        transform: translateZ(-6.7rem) translateY(1400px) !important;
        -webkit-transform: translateZ(-6.7rem) translateY(1400px) !important;
    }
}

.swiper-wrapper {
    transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72);
    -webkit-transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72);
    -moz-transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72);
    z-index: 2;
}

.swiper-slide {
    opacity: 0.15 !important;
    text-align: center;
    transform: translateZ(20px) translateY(1400) scale(0.95) opacity !important;
    -webkit-transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72);
    -webkit-transform: translateZ(20px) translateY(1400) scale(0.95) opacity !important;
    transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72);
    animation: s-appear 800ms cubic-bezier(0, 0.86, 0.55, 0.72);
    -webkit-animation: s-appear 800ms cubic-bezier(0, 0.86, 0.55, 0.72);
    -moz-animation: s-appear 800ms cubic-bezier(0, 0.86, 0.55, 0.72);
    -o-animation: s-appear 800ms cubic-bezier(0, 0.86, 0.55, 0.72);
    animation: s-appear 800ms cubic-bezier(0, 0.86, 0.55, 0.72);
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
    -o-animation-fill-mode: alternate;
    animation-fill-mode: alternate;
    -moz-animation-fill-mode: alternate;
    -webkit-animation-fill-mode: alternate;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide-prev {
    opacity: 0 !important;
    transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72) !important;
    -webkit-transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72) !important;
    transition-delay: 800ms !important;
    -webkit-transition-delay: 800ms !important;
    transform: translateZ(-6.7rem) translateY(1400px) !important;
    -webkit-transform: translateZ(-6.7rem) translateY(1400px) !important;
}

.swiper-slide-next {
    opacity: 0 !important;
    direction: vertical-rl !important;
    transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72) !important;
    transition-delay: 0ms !important;
    -webkit-transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72) !important;
    -webkit-transition-delay: 0ms !important;
    transform: translateZ(-6.7rem) translateY(1400px) !important;
    -webkit-transform: translateZ(-6.7rem) translateY(1400px) !important;
}

.swiper-slide-active {
    opacity: 1 !important;
    transform: translateY(0) !important;
    -webkit-transform: translateY(0) !important;
    transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72) !important;
    transition-delay: 800ms !important;
    -webkit-transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72) !important;
    -webkit-transition-delay: 800ms !important;
}

.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 40px) !important;
    font-size: 1.5rem;
}

.swiper-pagination-bullet {
    background: var( --swiper-pagination-bullet-inactive-color, rgba(0, 0, 0, 0.201)) !important;
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.8) !important;
}

:root {
    --swiper-theme-color: #31333400 !important;
    text-align: center !important;
}

.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: 80px !important;
    left: 0 !important;
    width: 100vw !important;
}

span.swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 1) !important;
    color: #6aa9e1 !important;
    background: var(--swiper-theme-color, #1515161c) !important;
}

.swiper-pagination-vertical.swiper-pagination-bullets,
.swiper-vertical>.swiper-pagination-bullets {
    right: -30% !important;
    top: -100% !important;
    transform: translate3d(-5%, 70%, 0) !important;
    display: flex !important;
    column-gap: 100px !important;
    text-align: center !important;
    background: var(--swiper-theme-color, #1515161c) !important;
    font-size: 1.5rem !important;    background-color: transparent !important;
}

@media screen and (max-width: 575px) {
    .swiper-pagination-vertical.swiper-pagination-bullets,
    .swiper-vertical>.swiper-pagination-bullets {
        right: 0% !important;
        top: -100% !important;
        transform: translate3d(-5%, 70%, 0) !important;
        display: flex !important;
        column-gap: 35px !important;
        text-align: center !important;
        background: var(--swiper-theme-color, #1515161c) !important;
        font-size: 0.75rem !important;
        background-color: transparent !important;
    }
    div.menu,
    div.menu.active {
        transform: scale(0.25) !important;
        top: 0% !important;
        right: -5% !important;
    }
}

svg {
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.active svg {
    transform: rotate(90deg);
}

path {
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

path:nth-child(1) {
    transform-origin: 36% 40%;
}

path:nth-child(2) {
    stroke-dasharray: 29 299;
}

path:nth-child(3) {
    transform-origin: 35% 63%;
}

path:nth-child(4) {
    stroke-dasharray: 29 299;
}

path:nth-child(5) {
    transform-origin: 61% 52%;
}

path:nth-child(6) {
    transform-origin: 62% 52%;
}

.active path:nth-child(1) {
    transform: translateX(9px) translateY(1px) rotate(45deg);
}

.active path:nth-child(2) {
    stroke-dasharray: 225 299;
    stroke-dashoffset: -72px;
}

.active path:nth-child(3) {
    transform: translateX(9px) translateY(1px) rotate(-45deg);
}

.active path:nth-child(4) {
    stroke-dasharray: 225 299;
    stroke-dashoffset: -72px;
}

.active path:nth-child(5) {
    transform: translateX(9px) translateY(1px) rotate(-45deg);
}

.active path:nth-child(6) {
    transform: translateX(9px) translateY(1px) rotate(45deg);
}

.swiper-pagination {
    opacity: 0;
    transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72) !important;
    transform: translateX(0px) !important;
}

.menu-active {
    transition: all 800ms cubic-bezier(0, 0.86, 0.55, 0.72) !important;
    opacity: 1;
    transform: translateX(30px) !important;
}



`;
  document.head.appendChild(l);
}