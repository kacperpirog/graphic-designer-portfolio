import React from "react";
import "../../globalStyled/partials/_nav.css";
import { Link } from "react-scroll";

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
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          duration={500}
          className="styledNav"
          href="/home"
        >
          HOME
        </Link>
        <Link
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          duration={500}
          className="styledNav"
          href="/About"
        >
          ABOUT
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          duration={500}
          className="styledNav"
          href="/Works"
        >
          WORKS
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="styledNav"
          href="/Contact"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Nav;
