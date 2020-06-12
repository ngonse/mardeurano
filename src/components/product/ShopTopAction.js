import PropTypes from "prop-types";
import React from "react";
import { setActiveLayout } from "../../helpers/product";

const ShopTopAction = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount,
}) => (
  <div className="shop-top-bar mb-35">
    <div className="shop-tab ml-auto">
      <button
        onClick={e => {
          getLayout("grid two-column");
          setActiveLayout(e);
        }}
      >
        <i className="fa fa-th-large" />
      </button>
      <button
        onClick={e => {
          getLayout("grid three-column");
          setActiveLayout(e);
        }}
      >
        <i className="fa fa-th" />
      </button>
      <button
        onClick={e => {
          getLayout("list");
          setActiveLayout(e);
        }}
      >
        <i className="fa fa-list-ul" />
      </button>
    </div>
  </div>
);

ShopTopAction.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number,
};

export default ShopTopAction;
