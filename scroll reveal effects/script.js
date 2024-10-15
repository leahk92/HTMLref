// Scroll Reveal
// https://scrollrevealjs.org/guide/hello-world.html

// common rerveal options to create reveal animations
ScrollReveal({
  //   reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

// target elements, and specify options to create revreal animations
ScrollReveal().reveal(".main-title", {
  delay: 350,
  origin: "left",
});
ScrollReveal().reveal(".sec-01 .image, .text-box-02", {
  delay: 450,
  origin: "bottom",
});
ScrollReveal().reveal(".text-box-01", {
  delay: 700,
  origin: "right",
});
ScrollReveal().reveal(".media-icons i", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".sec-02 .image, .sec-03 .image", {
  delay: 450,
  origin: "top",
});
ScrollReveal().reveal(".media-info li", {
  delay: 400,
  origin: "left",
  interval: 200,
});
