import React from "react";
import "../../globalStyled/_nav.css";

const Nav = () => {
  return (
    <div className="navWrapper">
      <div className="navCopy">
        <h5>
          PORTFOLIO.
          <br />
          Kacper Piróg
        </h5>
      </div>
      <div className="nav">
        <a className="styledNav" href="/home">
          HOME
        </a>
        <a className="styledNav" href="/About">
          ABOUT
        </a>
        <a className="styledNav" href="/Works">
          WORKS
        </a>
        <a className="styledNav" href="/Contact">
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Nav;
