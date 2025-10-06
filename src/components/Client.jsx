import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';


const LogoSlider = () => {
  const sliderTrackRef = useRef(null);

  const logos = [
    { id: 1, src: "./src/assets/images/logoss.png", alt: "ClickUp" },
    { id: 2, src: "./src/assets/images/logoss.png", alt: "Checkr" },
    { id: 3, src: "./src/assets/images/logoss.png", alt: "Spring" },
    { id: 4, src: "./src/assets/images/logoss.png", alt: "Café" },
    { id: 5, src: "./src/assets/images/logoss.png", alt: "Nolte" },
    { id: 6, src: "./src/assets/images/logoss.png", alt: "Vooma" },
    { id: 7, src: "./src/assets/images/logoss.png", alt: "Growwrk" }
  ];

  useEffect(() => {
    const sliderTrack = sliderTrackRef.current;

    // GSAP animation for infinite horizontal scroll
    const animation = gsap.to(sliderTrack, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1
    });

    // Clean up animation on component unmount
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="logo-slider">
      <div className="container-fluid hero-home">
<div className="text-center mb-5">
<p class="text-block-13">Trusted by...</p>
</div>
      

        {/* Left fade gradient */}
        <div className="fading-out"></div>
        
        {/* Right fade gradient */}
        <div className="fading-out _2"></div>
        
        {/* Slider track with duplicated logos for seamless loop */}
        <div ref={sliderTrackRef} className="slider-track">
          {/* Original logos */}
          {logos.map(logo => (
            <div key={`original-${logo.id}`} className="logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
          
          {/* Duplicated logos for smooth infinite effect */}
          {logos.map(logo => (
            <div key={`duplicate-${logo.id}`} className="logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;