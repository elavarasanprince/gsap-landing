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
              LinkedIn content for<br />
              <span style={{ color: '#0077b5' }}>founders</span>
            </h1>
            <p 
              className="lead mb-4 fs-5 text-muted"
              style={{ maxWidth: '600px', margin: '0 auto' }}
            >
              We help founders post content that gets millions of monthly impressions
            </p>
            <p className="mb-4 ">
              Backed by <span style={{ color: '#ff6600'}}>Y Combinator</span>
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
              Book intro call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;