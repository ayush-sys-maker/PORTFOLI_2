import React from "react"
import "./footer.css"
import LightRays from "./footerbg"

function Footer() {
  return (
    <div id="footer" className="Footer">

      {/* BACKGROUND ANIMATION */}
      <div className="footer-bg">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* REAL FOOTER CONTENT (ON TOP) */}
      <div className="footer-content">

        {/* LEFT – NAME */}
        <div className="footer-name">
          AAYUSH PAREEK
        </div>

        {/* CENTER – DESCRIPTION + BUTTON */}
        <div className="footer-center">
          <p className="footer-desc">
            Want to build something extraordinary?  
            Let’s connect and create your next powerful digital experience.
          </p>
          <button className="footer-btn-touch">   <a  className="footer-name"  href="https://www.instagram.com/_skybytes_?igsh=OGMybHhoYjk1dHZj"  >    Get in Touch</a>  </button>
        </div>

        {/* RIGHT – HIRE ME */}
        <div className="footer-right">
          <button className="hire-btn">Hire Me</button>
        </div>

      </div>

    </div>
  );
}

export default Footer
