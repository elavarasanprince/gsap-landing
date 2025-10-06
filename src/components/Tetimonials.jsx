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
      name: "Sarah Chen",
      role: "CEO, TechStart",
      content: "Rethoric transformed our LinkedIn presence. We went from 500 to 50,000 followers in 6 months and generated over 200 qualified leads.",
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
      content: "As a technical founder, I struggled with content creation. Rethoric made it effortless and the results speak for themselves.",
      avatar: "👩‍🔬"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Co-founder, SaaSPro",
      content: "The engagement strategy brought us 3 enterprise clients in the first month. ROI was immediate and substantial.",
      avatar: "👨‍💻"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "CEO, HealthTech",
      content: "Our content now resonates with our target audience. The team understands our voice and delivers consistent quality.",
      avatar: "👩‍⚕️"
    },
    {
      id: 6,
      name: "Alex Morgan",
      role: "Founder, FinTech Inc",
      content: "From zero to industry influencer in 90 days. The strategic approach to content changed everything for our business.",
      avatar: "👨‍🎓"
    }
  ];

  // Add card to ref array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;
    
    // Animate cards from right to left when section comes into view
    gsap.fromTo(cards, 
      {
        x: 100,
        opacity: 0,
        rotationY: 15
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="testimonial-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">What Founders Say</h2>
          <p className="section-subtitle">Join hundreds of founders who transformed their LinkedIn presence</p>
        </div>

        <div className="testimonial-cards-container">
          <div className="testimonial-cards-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={addToRefs}
                className="testimonial-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="testimonial-content">
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
      </div>
    </section>
  );
};

export default TestimonialSection;