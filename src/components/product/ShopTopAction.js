import PropTypes from "prop-types";
import React from "react";
import { setActiveLayout } from "../../helpers/product";
import { navigate } from "gatsby";

const ShopTopAction = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount,
}) => {
  return (
    <div className="shop-top-bar mb-35">
      <div className="shop-tab ml-auto">
        {/* <button
        onClick={(e) => {
          navigate("/shop");
        }}
      >
        CLEAR FILTERS
      </button> */}
        <button
          onClick={(e) => {
            getLayout("grid two-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th-large" />
        </button>
        <button
          onClick={(e) => {
            getLayout("grid three-column");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th" />
        </button>
      </div>
    </div>
  );
};

ShopTopAction.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number,
};

export default ShopTopAction;
