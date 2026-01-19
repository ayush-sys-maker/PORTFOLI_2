import React from "react";
import "./project.css";
import SplitText from "./hello.js";
import InfiniteMenu from "./procard.js";

function Project() {
  // Items must be declared OUTSIDE the return
  const items = [
    {
      image: "bl.png",
      link: "https://google.com/",
      title: "E-COMMERCE WEBSITE",
      description: "BUILDED A BEAUTIFUL STORE USING MERN STACK"
    },
    {
      image: "cook.png",
      link: "https://google.com/",
      title: "COOKING ASSISTANT",
      description: "A COOKING ASSISTANT HELPS IN COOKING"
    },
    {
      image: "logo.png",
      link: "https://google.com/",
      title: "RESTAURANT SITE",
      description: "BEAUTIFUL RESTAURANT SITE TO GET MORE COUSTOMERS?"
    }
  ];

  return (
    <div id="project" className="Project">

      {/* TITLE */}
      <SplitText 
        text="PROJECTS"
        className="hero-title"
      />

      {/* INFINITE MENU */}
      <div  style={{ height: "600px", position: "relative" }}>
        <InfiniteMenu items={items} />
      </div>

    </div>
  );
}

export default Project;
