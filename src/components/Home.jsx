import React, { useState } from "react";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  const [activeRoute, setActiveRoute] = useState("home");

  return (
    <div>
      <Navbar
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
      ></Navbar>
      <Banner setActiveRoute={setActiveRoute}></Banner>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
