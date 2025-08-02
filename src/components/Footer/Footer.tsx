"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/asklogo.png" alt="SWE Logo" className="footer-logo" />
        </div>

        <div className="footer-section">
          <h4>USF AΣK</h4>
          <p>4202 E. Fowler Avenue • Tampa, FL 33620, USA</p>
        </div>

        <div className="footer-section">
          <h4>AΣK National</h4>
          <ul>
            <li>
              <a href="https://ask-wits.com/about/">Visit Website</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>LEGAL</h4>
          <p>
            &copy; Alpha Sigma Kappa - Women in Technical Studies. 2025. All
            Rights Reserved.
          </p>
        </div>

        <div className="footer-section">
          <h4>SOCIAL</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/ASKWiTS"
              aria-label="Facebook"
              className="social-icon"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://x.com/alphasigmakappa"
              aria-label="Twitter"
              className="social-icon"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/alpha-sigma-kappa---women-in-technical-studies/"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <FaLinkedinIn size={25} />
            </a>
            <a
              href="https://www.instagram.com/usfask/?hl=en"
              aria-label="Instagram"
              className="social-icon"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
