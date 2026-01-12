import React from "react";
import Navbar from "./componenets/navbar.js";
import Hero from "./componenets/home.js";
import Gallery from "./componenets/gallery.js";
import "./App.css";
import ScrollFloat from "./componenets/gallerytxt.js"
import About from "./componenets/cobra.js";
import GradientText from "./componenets/shiny-text.js"
import Project from "./componenets/projects.js";
import Footer from "./componenets/footer.js"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
     <div className="app">
      <Navbar />
      <Hero />
      <Gallery/>
      <About/>
      <GradientText/>
      <Project/>
      <Footer/>
    </div>
  
  );
}

export default App;
