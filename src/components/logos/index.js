import React from "react";
import "../../globalStyled/partials/_logoCarousel.css";
import uaLogo from "../../assets/logos/UA.png";
import ISLogo from "../../assets/logos/IS.png";
import czterfspotLogo from "../../assets/logos/4f_spot.png";
import czteryfLogo from "../../assets/logos/4f.png";
import tauron from "../../assets/logos/tauron.png";
import sizzer from "../../assets/logos/sizer.png";
import unia from "../../assets/logos/unia.png";
import pg from "../../assets/logos/pg.png";
import pkp from "../../assets/logos/pkp.png";

const Logos = () => {
  return (
    <>
      <div className="slider">
        <div className="slide-track2">
          <div className="slide ">
            <img src={uaLogo} alt="uaLogo" />
          </div>
          <div className="slide ">
            <img src={ISLogo} alt="ISLogo" />
          </div>
          <div className="slide ">
            <img src={czterfspotLogo} alt="czterfspotLogo" />
          </div>
          <div className="slide">
            <img src={czteryfLogo} alt="czteryfLogo" />
          </div>
          <div className="slide ">
            <img src={tauron} alt="tauron" />
          </div>
          <div className="slide ">
            <img src={sizzer} alt="sizzer" />
          </div>
          <div className="slide ">
            <img src={unia} alt="unia" />
          </div>
          <div className="slide ">
            <img src={pg} alt="pg" />
          </div>
          <div className="slide ">
            <img src={pkp} alt="pkp" />
          </div>
          <div className="slide ">
            <img src={uaLogo} alt="uaLogo" />
          </div>
          <div className="slide ">
            <img src={ISLogo} alt="ISLogo" />
          </div>
          <div className="slide ">
            <img src={czterfspotLogo} alt="czterfspotLogo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logos;
