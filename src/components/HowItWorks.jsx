import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "Step 1",
      title: "Join an Interview Session",
      description: "We extract your insights, lessons, experiences, and stories into optimized LinkedIn content."
    },
    {
      number: "Step 2", 
      title: "Approve Content Batches",
      description: "World-class human writers & editors create all your content. You receive content batches for I-click approval & unlimited revisions."
    },
    {
      number: "Step 3",
      title: "Real-Time Collaboration on Slack", 
      description: "Always available via Slack for instant communication. Whether it's sharing ideas or brainstorming sessions, we work like a full-time member of your team."
    },
    {
      number: "Step 4",
      title: "Daily Strategic Engagement & Outreach",
      description: "We will engage daily with relevant posts to boost your content distribution and strategically grow your audience with non-sale ✅️ ch."
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