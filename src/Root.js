import React from "react";
import AboutMe from "./views/aboutMe";
import SliderHome from "./components/slider";
import Portfolio from "./views/portfolio";
import Logos from "./components/logos";
import Footer from "./components/footer";
import Nav from "./components/nav";
import "./globalStyled/partials/main.css";
import Contact from "./views/contact";

const Root = () => {
  return (
    <div>
      <Nav />
      <SliderHome />
      <AboutMe />
      <Portfolio />
      <Logos />
      <Contact />
      <Footer />
    </div>
  );
};

export default Root;
