import React from "react";
import "./about.css";
import {GridScan}  from "./cobrabg.js";
import  SplitText from   "./hello.js"
import ScrollReveal from "./scroll.js"


function About() {
  return (
   <div      >

      <div 
        style={{ 
          width: '100%', 
          height: '600px', 
          position: 'relative', 
          backgroundColor: '#000',
          overflow: "hidden"
        }}
      >
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#150d46ff"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          className={"grid"}
        />

        {/* ABOUT CONTENT */}
        <div className="about-content">
   <SplitText 
  text="About me"
  className="hero-title"
/>          
        </div>

        <div  className="para"  >
<ScrollReveal
  containerClassName="scroll-heading"
  textClassName="scroll-text gradient-text  "
>

  

  I’m Ayush, a web developer who loves creating clean, fast, and modern websites. 
  I focus on building smooth user experiences with good design, proper structure, 
  and responsive layouts. My goal is to help brands, restaurants, and businesses 
  stand out online with premium-quality websites that are simple, functional, 
  and visually appealing.

</ScrollReveal>

<button  className="styled-button">
  <a className="btn-name"  href="https://www.instagram.com/_skybytes_?igsh=OGMybHhoYjk1dHZj"  > contact   </a>
  <div  className="inner-button">
    <svg
      id="Arrow"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      width="30px"
      className="icon"
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#AAAAAA", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <path
        fill="url(#iconGradient)"
        d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
      />
    </svg>
  </div>
</button>

               

        </div>



      </div>

    </div>
  );
}

export default About;
