import React, { useState } from "react";
import "../../globalStyled/partials/_contact.css";
import { Element } from "react-scroll";
import profileFoto from "../../assets/profile/foto_KP.jpeg";
import linkedin from "../../assets/profile/linkedin.svg";
import bithub from "../../assets/profile/square-github.svg";
import cv from "../../assets/profile/cv.svg";
import cv_01 from "../../assets/profile/Kacper_Piróg_CV_Graphic_pl.jpg";

const ContactForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Element name="contact" className="element">
        <div className="contactFormWrapper">
          <div className="imgStyled">
            <img src={profileFoto} alt="foto" />
            <p>Kacper Piróg</p>
          </div>

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

          <div className="rightCopy">
            <h1>Kontakt</h1>
            <h2>
              tel.: 883-721-663
              <br />
              email.: kacper.pirog@gmail.com
            </h2>
          </div>
        </div>
      </Element>
    </>
  );
};

export default ContactForm;
