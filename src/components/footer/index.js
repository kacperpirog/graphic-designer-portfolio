import React from "react";
import "../../globalStyled/partials/_footer.css";

const Footer = () => {
  return (
    <div className="footerDiv">
      <p>Copyright &copy; {new Date().getFullYear()} Kacper Piróg</p>
    </div>
  );
};

export default Footer;
