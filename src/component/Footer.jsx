import React from 'react'

const Footer = () => {
    return (
      <footer className="footer">
        <p className="footer-title">Based In</p>
        <p className="footer-subtitle">Malang, Jawa Timur, Indonesia</p>
        <div className="footer-social">
          <a href="https://www.instagram.com/pandhuu._" className="sosmed-icon">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://github.com/panntod" className="sosmed-icon">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.facebook.com/pandhu.munjalindra"
            className="sosmed-icon"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>
        <p className="footer-copy">&copy; 2023 Pandhu Arya</p>
      </footer>
    );
  };
  
  export default Footer;
  