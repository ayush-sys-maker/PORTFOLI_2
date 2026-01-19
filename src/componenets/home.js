import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import SplitText from "./hello";
import PillNav from "./navbar";

function Hero() {
  return (
    <section id="hero" className="hero">

      {/* DESKTOP NAV */}
      <PillNav
        items={[
          { label: "Github", href: "https://github.com/ayush-sys-maker" },
          { label: "Projects", href: "#project" },
          { label: "Services", href: "#gallery" },
          { label: "Contact", href: "https://www.instagram.com/_skybytes_?igsh=OGMybHhoYjk1dHZj" }
        ]}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />

      {/* MOBILE MENU BUTTON */}
      <button
        className="btn btn-dark mobile-menu-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileMenu"
      >
        <i className="bi bi-list"></i>
      </button>

      {/* OFFCANVAS */}
     <div
  className="offcanvas offcanvas-start custom-offcanvas"
  tabIndex="-1"
  id="mobileMenu"
>
  <div className="offcanvas-header">
    <button
      type="button"
      className="btn-close btn-close-white"
      data-bs-dismiss="offcanvas"
    ></button>
  </div>

  <div className="offcanvas-body">
    <ul className="offcanvas-menu">
      <li>
       <a
  href="https://github.com/ayush-sys-maker"
  target="_blank"
  rel="noopener noreferrer"
  className="offcanvas-btn"
  data-bs-dismiss="offcanvas"
>
  Github
</a>
      </li>

      <li>
        <a
          href="#gallery"
          className="offcanvas-btn"
          data-bs-dismiss="offcanvas"
        >
          Services
        </a>
      </li>

      <li>
        <a
          href="#project"
          className="offcanvas-btn"
          data-bs-dismiss="offcanvas"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/_skybytes_?igsh=OGMybHhoYjk1dHZj"
          target="_blank"
          rel="noreferrer"
          className="offcanvas-btn"
          data-bs-dismiss="offcanvas"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
</div>

      {/* CENTER CONTENT */}
      <div className="hero-center">
        <SplitText
          text="Hi, I am Ayush"
          className="hero-title"
        />

        <motion.img
          src="/ayush-animated2.png"
          alt="Ayush"
          className="hero-img"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* LEFT TEXT */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="hero-work">
          I build beautiful, fast and mobile-friendly websites
          for stores, restaurants and hotels.
        </p>
      </motion.div>

      {/* CTA */}
<a
  href="https://www.instagram.com/_skybytes_?igsh=OGMybHhoYjk1dHZj"
  target="_blank"
  rel="noreferrer"
  className="contact-btn"
>
  Contact Us
</a>
    </section>
  );
}

export default Hero;
