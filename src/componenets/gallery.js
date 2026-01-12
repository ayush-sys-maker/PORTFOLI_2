import React, { useEffect, useRef } from "react";
import SpotlightCard from "./card.js";
import "./gallery.css";
import ScrollFloat from "./gallerytxt.js";

function Gallery() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("popup-show");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div   id="gallery"  className="gallery">
      {/* TITLE */}
      <div className="gallery-txt" style={{ textAlign: "center", width: "100%" }}>
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          WHAT I DO
        </ScrollFloat>
      </div>

      {/* CARDS */}
      <div className="gallery-img">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="popup-card"
        >
          <SpotlightCard
            className="ecom-card"
            onClick={() =>
              (window.location.href = "https://your-project-link.com")
            }
          >
            <h2 className="ecom-title">Next-Gen Ecommerce Experience</h2>
            <p className="ecom-desc">
              Build fast, scalable online stores with elegant UI and smooth UX.
              Designed to convert visitors into customers effortlessly.
            </p>
          </SpotlightCard>
        </div>

        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="popup-card"
        >
          <SpotlightCard className="ecom-card">
            <h2 className="ecom-title">Restaurant Website</h2>
            <p className="ecom-desc">
              Showcase your menu, ambience, and food specials.
              Optimized for delivery, reservations, and customer engagement.
            </p>
          </SpotlightCard>
        </div>

        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="popup-card"
        >
          <SpotlightCard className="ecom-card">
            <h2 className="ecom-title">Gym & Fitness Website</h2>
            <p className="ecom-desc">
              Inspire members with modern design, class schedules,
              trainer highlights, and membership plans.
            </p>
          </SpotlightCard>
        </div>

        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="popup-card"
        >
          <SpotlightCard className="ecom-card">
            <h2 className="ecom-title">Dental Clinic Website</h2>
            <p className="ecom-desc">
              Clean, professional websites for clinics.
              Highlight treatments, doctor profiles, and easy appointment booking.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
