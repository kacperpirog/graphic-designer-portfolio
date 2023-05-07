import React from "react";
import "../../globalStyled/partials/_slider.css";
import { Element } from "react-scroll";
import linkedin from "../../assets/profile/linkedin.svg";
import bithub from "../../assets/profile/square-github.svg";
import cv from "../../assets/profile/cv.svg";
import cv_01 from "../../assets/profile/Kacper_Piróg_CV_Graphic_pl.jpg";

const SliderHome = () => {
  return (
    <Element name="Home" className="element">
      <div className="sliderWrapper">
        <div className="sliderBackground">
          <div class="ballContainer">
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div> <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div> <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div> <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
          </div>
        </div>
        <div className="sliderConteiner"></div>
        <div className="sliderInfo">
          <h1>Kacper Piróg</h1>
          <h2>Graphic designer & Front-end</h2>
          <div>
            <a href="https://www.linkedin.com/in/kacper-pir%C3%B3g-0991a151">
              <img className="styledSVG" src={linkedin} alt="linkedin" />
            </a>

            <a href="https://github.com/kacperpirog">
              <img className="styledSVG" src={bithub} alt="bithub" />
            </a>
            <a href={cv_01}>
              <img className="styledSVG" src={cv} alt="cv" />
            </a>
          </div>
          {/* <button>WORK</button> */}
        </div>
      </div>
    </Element>
  );
};

export default SliderHome;
