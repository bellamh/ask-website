"use client";

import React, { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a href="/" aria-label="Go to homepage">
            <img src="/asklogo.png" alt="Alpha Sigma Kappa Logo" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/involvement">Involvement</a>
            </li>
            <li>
              <a href="/recruitment">Recruitment</a>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <button
          className="join-ask-btn"
          onClick={() =>
            window.open(
              "https://airtable.com/appsc6RXbJVVNFzZR/shrfdJdhjrnmrbMs5",
              "_blank"
            )
          }
        >
          Join AΣK
        </button>
      </div>
    </header>
  );
}
