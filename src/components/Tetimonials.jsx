import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const testimonials = [
    {
      id: 1,
      name: "VivianGomes",
      role: "Co-founder at HFR&D",
      content: "Sudhar is a maverick, a rare mix of being a good samaritan and a kind businessman who empowers many directly and indirectly to be happy and successful.",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Founder, GrowthLabs",
      content: "The content strategy helped me establish thought leadership in my industry. My posts now regularly get 10k+ impressions.",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Startup Founder",
      content: "Working with Lev and the team @Rethoric was a rewarding experience. They are true professionals: always delivering on time and incredibly knowledgeable about organic content marketing. They helped me build my offer and guided me on strategic decisions about implementation and my personal brand. I am glad to have Rethoric in my corner.",
      avatar: "👩‍🔬"
    },
    

  ];

  // Add card to ref array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;
    
    let scrollMoveLeft2 = document.querySelectorAll(".scroll-move-left2");
    scrollMoveLeft2.forEach((scrollMoveLeft2) => {
        gsap.to(scrollMoveLeft2, {
            x: 100,
            duration: 1.5,
            scrollTrigger: {
                trigger: scrollMoveLeft2,
                start: "top 100%",
                scrub: 2
            }
        });
    });
    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="testimonial-section">
      <div className="container-fluid">
        <div className="text-center mb-5">
          <h2 className="section-title">What Founders Say</h2>
          <p className="section-subtitle">Join hundreds of founders who transformed their LinkedIn presence</p>
        </div>

        <div className="row">
         
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={addToRefs}
                className="col-lg-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="testimonial-content scroll-move-left2 card h-100 border-0">
                  <div className="testimonial-avatar">
                    {testimonial.avatar}
                  </div>
                  <p className="testimonial-text">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;