"use strict";

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.fadeUp').forEach(function (img) {
  gsap.from(img, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '#videoBG',
      start: "top 4000px",
      scrub: true
    }
  });
  gsap.to(img, {
    opacity: 0,
    y: 600,
    scrollTrigger: {
      trigger: '#videoBG',
      start: "left 40%",
      end: "+=600",
      scrub: true,
      stagger: 2.5
    }
  });
});
gsap.utils.toArray('.fade').forEach(function (section) {
  gsap.from(section, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 0%",
      scrub: true
    }
  });
});