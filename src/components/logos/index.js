import React from "react";
import "../../globalStyled/partials/_logoCarousel.css";
import uaLogo from "../../assets/logos/UA.png";
import ISLogo from "../../assets/logos/IS.png";
import czterfspotLogo from "../../assets/logos/4f_spot.png";
import czteryfLogo from "../../assets/logos/4f.png";

const Logos = () => {
  return (
    <>
      <div className="slider">
        <div className="slide-track2">
          <div className="slide ">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={ISLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={czterfspotLogo} alt="University of Arizona" />
          </div>
          <div className="slide">
            <img src={czteryfLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={ISLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={czterfspotLogo} alt="University of Arizona" />
          </div>
          <div className="slide">
            <img src={czteryfLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={ISLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={czterfspotLogo} alt="University of Arizona" />
          </div>
          <div className="slide">
            <img src={czteryfLogo} alt="University of Arizona" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logos;
