// src/scripts/animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Navbar animation
  gsap.to(".navbar-custom", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });

  // Hero section animations
  gsap.to(".hero h1", {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.to(".hero p", {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 0.6,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.to(".btn-dark", {
    duration: 0.8,
    scale: 1,
    opacity: 1,
    delay: 1.2,
    ease: "back.out(1.7)",
  });



  // Logo slider animation
  gsap.to(".slider-track", {
    xPercent: -50,
    duration: 20,
    ease: "linear",
    repeat: -1,
  });
};

export const initFAQToggle = () => {
  const faqs = document.querySelectorAll(".faq-item");
  faqs.forEach((faq) => {
    const question = faq.querySelector(".faq-question");
    question?.addEventListener("click", () => {
      faq.classList.toggle("active");
      faqs.forEach((other) => {
        if (other !== faq) other.classList.remove("active");
      });
    });
  });
};
