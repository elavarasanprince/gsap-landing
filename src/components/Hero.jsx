import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="hero d-flex align-items-center justify-content-center text-center"
      style={{ 
        minHeight: '100vh',
        padding: '2rem 1rem'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h1 
              className="display-4 fw-bold mb-4"
              style={{ lineHeight: '1.2' }}
            >
              Personal Branding for Business Owners
{/* <br /> */}
              <span style={{ color: '#0077b5' }}></span>
            </h1>
            <p 
              className="lead fw-normal mb-4 fs-5 text-muted"
            
            >
             We help business owners and C-suite executives

            </p>
            <p className="mb-4 spl-text fs-6">
            <span style={{ color: '#ff6600'}}> 400 million impressions and counting
</span>
            </p>
            <button 
              className="btn btn-dark btn-lg px-5 py-3 fw-semibold"
              style={{ 
                borderRadius: '50px',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Book a call

            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;