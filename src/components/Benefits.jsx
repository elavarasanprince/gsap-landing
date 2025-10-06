import React from "react";

export default function Benefits() {
  const benefits = [
    { icon: "⏳", title: "Save On Your Time", desc: "Focus on building your business." },
    { icon: "💰", title: "Fundraise Easier", desc: "Attract engaged VC interest." },
    { icon: "📣", title: "Amplify Your Voice", desc: "Become an industry authority." },
    { icon: "💎", title: "Build Credibility", desc: "Be the go-to expert in your niche." },
    { icon: "💵", title: "See Tangible ROI", desc: "Spend less on customer acquisition." },
    { icon: "👥", title: "Acquire More Customers", desc: "Drive sales on autopilot." },
  ];

  return (
    <section className="benefits py-5 text-center">
      <div className="container">
        <h2 className="section-title">Benefits of Founder-Led Content</h2>
        <div className="row g-5">
          {benefits.map((b, i) => (
            <div className="col-md-4" key={i}>
              <div className="benefit-item">
                <div className="icon fs-1 mb-3">{b.icon}</div>
                <h3 className="fw-bold1">{b.title}</h3>
                <p className="text-muted">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
