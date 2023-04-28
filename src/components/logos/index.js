import React from "react";
import "../../globalStyled/partials/_logoCarousel.css";
import uaLogo from "../../assets/logos/UA.png";

const Logos = () => {
  return (
    <>
      <div className="slider">
        <div className="slide-track2">
          <div className="slide ">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
          <div className="slide">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
          <div className="slide">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
          <div className="slide ">
            <img src={uaLogo} alt="University of Arizona" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logos;
