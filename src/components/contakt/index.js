import React from "react";
import "../../globalStyled/partials/_contact.css";

import { Element } from "react-scroll";
import profileFoto from "../../assets/profile/foto_KP.jpeg";

const ContactForm = () => {
  return (
    <>
      <Element name="contact" className="element">
        <div className="contactFormWrapper">
          <div>
            <img src={profileFoto} alt="foto" />
            <p>Kacper Piróg</p>
          </div>

          <div>
            <h1>Kacper Piróg</h1>
            <h2>
              Kraków,
              <br />
              Poland
            </h2>
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
