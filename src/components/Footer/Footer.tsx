'use client';

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"; // Removed FaYoutube (was unused)
import Image from "next/image"; // Replacing <img> with <Image />
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <Image
            src="/asklogo.png"
            alt="ASK Logo"
            width={100}
            height={100}
            className="footer-logo"
          />
        </div>

        <div className="footer-section">
          <h4>USF AΣK</h4>
          <p>4202 E. Fowler Avenue • Tampa, FL 33620, USA</p>
        </div>

        <div className="footer-section">
          <h4>AΣK National</h4>
          <ul>
            <li>
              <a href="https://ask-wits.com/about/" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://x.com/alphasigmakappa"
              aria-label="Twitter"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/alpha-sigma-kappa---women-in-technical-studies/"
              aria-label="LinkedIn"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={25} />
            </a>
            <a
              href="https://www.instagram.com/usfask/?hl=en"
              aria-label="Instagram"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
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
