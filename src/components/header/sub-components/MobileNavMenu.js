import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item">
          <Link to={"/shop-grid-standard"}>{strings["shop"]}</Link>
        </li>
        {/* <li className="menu-item">
          <Link to={"/art"}>{strings["art"]}</Link>
        </li> */}
        <li className="menu-item">
          <Link to={"/collections"}>{strings["collections"]}</Link>
        </li>
        <li className="menu-item">
          <Link to={"/our-world"}>{strings["our-world"]}</Link>
        </li>
        <li className="menu-item">
          <Link to={"/sale"}>{strings["sale"]}</Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object,
};

export default multilanguage(MobileNavMenu);
