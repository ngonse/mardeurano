import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";

import { addToCart } from "../../redux/actions/cartActions";
import { addToCheckout } from "../../redux/actions/shopifyCheckoutAction";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";

import ProductGridListSingle from "./ProductGridListSingle";

const ProductGrid = props => {
  //   console.log(props);

  const {
    products,
    checkout,
    addToCart,
    addToWishlist,
    addToCompare,
    cartItems,
    wishlistItems,
    compareItems,
    sliderClassName,
    spaceBottomClass,
  } = props;

  return (
    <Fragment>
      {products.map(product => {
        return (
          <ProductGridListSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            addToCompare={addToCompare}
            cartItem={
              cartItems.filter(cartItem => cartItem.id === product.shopifyId)[0]
            }
            wishlistItem={
              wishlistItems.filter(
                wishlistItem => wishlistItem.id === product.shopifyId
              )[0]
            }
            compareItem={
              compareItems.filter(
                compareItem => compareItem.id === product.shopifyId
              )[0]
            }
            key={product.shopifyId}
          />
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData,
    shopifyClient: state.shopifyClient,
    checkout: state.shopifyClient.checkout,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize,
      images
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize,
          images
        )
      );
      dispatch(addToCheckout(item));
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
