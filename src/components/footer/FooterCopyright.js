import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

const FooterCopyright = ({ footerLogo, spaceBottomClass }) => {
  return (
    <div
      className={`text-center copyright ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="footer-logo">
        <Link to={"/"}>
          <img alt="" src={footerLogo} />
        </Link>
      </div>
      <p>
        © 2020{" "}
        <a href="/" rel="noopener noreferrer" target="_blank">
          Mar de Urano
        </a>
        <br />
        All Rights Reserved
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default FooterCopyright;
