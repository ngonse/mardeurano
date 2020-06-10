import PropTypes from "prop-types";
import React, { Fragment } from "react";

import HeaderApp from "../../wrappers/header/HeaderApp";
import FooterAppOne from "../../wrappers/footer/FooterAppOne";

const ShopLayout = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
}) => {
  return (
    <Fragment>
      <HeaderApp
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
      />
      {children}
      <FooterAppOne
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
    </Fragment>
  );
};

ShopLayout.propTypes = {
  children: PropTypes.any,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerTop: PropTypes.string,
};

export default ShopLayout;
