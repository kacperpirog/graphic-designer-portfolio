import React from "react";
import "../../globalStyled/partials/_contact.css";
import balls from "../../assets/webComponents/3-balls.png";

const ContactForm = () => {
  return (
    <>
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
    </>
  );
};

export default ContactForm;
