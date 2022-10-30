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
