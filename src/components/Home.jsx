import React from "react";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
