import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "Step 1",
      title: "Get on a discovery session",
      description: "Our expert gets in on a virtual meeting with you to get your stories, understand your experience and expertise so we can get the right writer onboard to craft perfectly optimised posts / scripts for you."
    },
    {
      number: "Step 2", 
      title: "Content approval and tone correction",
      description: "The created posts / scripts that are created by writers will be sent to you for approval and tone correction will be done in a virtual meeting."
    },
    {
      number: "Step 3",
      title: "Real time collaboration", 
      description: "We collaborate real time over email / slack / whatsapp to keep the communication going considering your busy schedule. "
    },
    {
      number: "Step 4",
      title: "Save time",
      description: "We don’t solve the content problem, we solve your time problem for content. You are the expert at what you do. We are here to help you save time. While you build your business, we build your personal brand."
    }
  ];

  return (
    <section className=" py-5">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="section-title">How it works</h1>
          </div>
        </div>
        
        {/* Steps Grid */}
        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="h-100 card-borders shadow-sm hover-shadow">
                <div className="card-body p-4">
                  {/* Step Number */}
                  <div className="fw-semibold small mb-3">
                    {step.number}
                  </div>
                  
                  {/* Step Title */}
                  <h2 className="card-title fw-semibold mb-3 text-dark">
                    {step.title}
                  </h2>
                  
                  {/* Step Description */}
                  <p className="card-text text-muted lh-base mb-0">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;