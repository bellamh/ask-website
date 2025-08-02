"use client";
import React, { useState, useEffect } from "react";
import "./backtotop.css";

export default function BackToTop() {
  const [scroll, setScroll] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScroll(currentScrollY);
      setHeaderVisible(currentScrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setHeaderVisible(true);
  };

  return (
    <a
      onClick={scrollToTop}
      className={`back-to-top d-flex align-items-center justify-content-center ${
        scroll > 100 ? "active" : ""
      } ${headerVisible ? "with-header" : ""}`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}
