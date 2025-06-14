// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --------------------- Top Bar Animation ---------------------
gsap.from(".top-bar", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});
gsap.from(".top-bar .phone-number", {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.5
});

// --------------------- Main Nav ---------------------
gsap.from(".main-nav", {
  y: -40,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});
gsap.from(".main-nav .nav-link, .main-nav .navbar-brand", {
  opacity: 0,
  y: -20,
  duration: 0.8,
  stagger: 0.1, 
  delay: 0.5
});

// --------------------- Hero Section ---------------------
gsap.from(".hero-section .hero-title", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center"
  },
  opacity: 0,
  y: 40,
  duration: 1
});
gsap.from(".hero-section .hero-description", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.2
});
gsap.from(".hero-section .hero-btn", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center"
  },
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.4
});

// --------------------- Section Headers (Auto Applies to All) ---------------------
document.querySelectorAll(".section-header").forEach((header) => {
  gsap.from(header.children, {
    scrollTrigger: {
      trigger: header,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });
});

// --------------------- #element03 (Check-in & Info Columns) ---------------------
gsap.from("#element03 .info-column", {
  scrollTrigger: {
    trigger: "#element03 .booking-info",
    start: "top 80%",
  },
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.3
});
gsap.from("#element03 .book-now-btn", {
  scrollTrigger: {
    trigger: "#element03 .book-now-section",
    start: "top 85%",
  },
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 0.2
});

// --------------------- #element04 (Facilities) ---------------------
gsap.from("#element04 .facility-icon", {
  scrollTrigger: {
    trigger: "#element04 .facility-icon",
    start: "top 85%",
  },
  opacity: 0,
  y: 30,
  scale: 0.8,
  duration: 1,
  stagger: 0.15
});

// --------------------- #element05 (Map + Accordion) ---------------------
gsap.from("#element05 .map-container", {
  scrollTrigger: {
    trigger: "#element05",
    start: "top 85%",
  },
  x: -100,
  opacity: 0,
  duration: 1
});
gsap.from("#element05 .section-subtitle-wrapper", {
  scrollTrigger: {
    trigger: "#element05",
    start: "top 85%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
gsap.utils.toArray("#element05 .accordion-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    delay: i * 0.1
  });
});

// --------------------- #element07 (FAQ Accordion) ---------------------
gsap.utils.toArray("#element07 .accordion-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    delay: i * 0.1
  });
});
gsap.from("#element07 .decorative-svg", {
  scrollTrigger: {
    trigger: "#element07",
    start: "top 85%",
  },
  opacity: 0,
  y: -20,
  duration: 1.2,
  stagger: 0.2,
  ease: "power2.out"
});

// --------------------- #element08 (Footer) ---------------------
gsap.from("#element08 .footer-section", {
  scrollTrigger: {
    trigger: "#element08",
    start: "top 80%",
  },
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});
