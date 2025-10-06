import React, { useState } from 'react';


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const leftFaqData = [
    {
      question: "What is founder-led content?",
      answer: "Founder-led content is created by founders to build trust, credibility, and attract ideal customers through authentic storytelling."
    },
    {
      question: "How does this help my business grow?",
      answer: "It amplifies your voice, builds authority, and improves customer trust — ultimately driving conversions organically."
    },
    {
      question: "Can I customize the content strategy?",
      answer: "Yes! Our strategies are fully personalized for your brand goals, audience, and market position."
    },
    {
      question: "How long until I see results?",
      answer: "Most clients see measurable engagement and credibility growth within 60–90 days of consistent content publishing."
    }
  ];

  const rightFaqData = [
    {
      question: "What's included in the service?",
      answer: "We provide content strategy, creation, publishing, and engagement management tailored to your brand voice and goals."
    },
    {
      question: "Do you work with startups only?",
      answer: "We work with founders at all stages, from pre-seed startups to established companies looking to build thought leadership."
    },
    {
      question: "How often will content be published?",
      answer: "We recommend 3-5 high-quality posts per week for optimal engagement and algorithm performance."
    },
    {
      question: "What makes your approach different?",
      answer: "We combine founder storytelling with data-driven strategy and daily engagement to maximize reach and impact."
    }
  ];

  const handleFaqClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderFaqColumn = (faqData, columnOffset = 0) => {
    return faqData.map((item, index) => {
      const globalIndex = index + columnOffset;
      return (
        <div 
          key={`faq-${globalIndex}`}
          className={`faq-item ${activeIndex === globalIndex ? 'active' : ''}`}
        >
          <button 
            className="faq-question text-bold"
            onClick={() => handleFaqClick(globalIndex)}
          >
            {item.question}
            <span className="icon">
              {activeIndex === globalIndex ? '−' : '+'}
            </span>
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="faq-container">
              {renderFaqColumn(leftFaqData, 0)}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="faq-container">
              {renderFaqColumn(rightFaqData, leftFaqData.length)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;