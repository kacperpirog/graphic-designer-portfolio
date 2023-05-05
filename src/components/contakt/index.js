import React from "react";
import "../../globalStyled/partials/_contact.css";
import balls from "../../assets/webComponents/3-balls.png";
import { Element } from "react-scroll";

const ContactForm = () => {
  return (
    <>
      <Element name="contact" className="element">
        <div className="contactFormWrapper">
          <div>
            <h1>Kacper Piróg</h1>
            <h2>
              Kraków,
              <br />
              Poland
            </h2>
          </div>
          <div className="midStyled">
            {/* <h1>zostaw Swój mail odezwe się </h1> */}
            <img className="imgStyled" src={balls} alt="balls" />
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
