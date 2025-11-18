import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
     <section className="join-section container d-flex flex-column flex-lg-row justify-content-between align-items-center">
    <h2 className="mb-4 mb-lg-0">Work with us </h2>
    <button className=" btn-black">Book a call</button>
  </section>
    <footer className="container py-4 mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 footer-links mb-3 mb-md-0">
          <Link to="/privacy-policy" className="text-decoration-none text-muted me-4">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="text-decoration-none text-muted me-4">
            Terms of Use
          </Link>
          <Link to="/legal" className="text-decoration-none text-muted me-4">
            Legal
          </Link>
          <Link to="/cookies" className="text-decoration-none text-muted">
            Cookies
          </Link>
        </div>
        <div className="col-md-6 footer-bottom text-md-end text-muted">
          Copyright © 2025 TSC. All rights reserved. Website Designed By <a href="https://techovirish.com/" target="_blank" rel="noopener noreferrer">TechoVirish</a>
        </div>
      </div>
    </footer>
    </>
  
  );
};

export default Footer;
