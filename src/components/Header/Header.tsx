'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div className="logo">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/asklogo.png"
              alt="Alpha Sigma Kappa Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>

        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/involvement">Involvement</Link>
            </li>
            <li>
              <Link href="/recruitment">Recruitment</Link>
            </li>
          </ul>
        </nav>

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