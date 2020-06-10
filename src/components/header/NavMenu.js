import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={"/"}>{strings["home"]}</Link>
          </li>
          <li>
            <Link to={"/shop"}>{strings["shop"]}</Link>
          </li>
          <li>
            <Link to={"/art"}>{strings["art"]}</Link>
          </li>
          <li>
            <Link to={"/collections"}>{strings["collections"]}</Link>
          </li>
          <li>
            <Link to={"/our-world"}>{strings["our-world"]}</Link>
          </li>
          <li>
            <Link to={"/sale"}>{strings["sale"]}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default multilanguage(NavMenu);
