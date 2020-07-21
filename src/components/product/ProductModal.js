import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { getProductCartQuantity } from "../../helpers/product";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import truncate from "lodash/truncate";
import get from "lodash/get";
import uniq from "lodash/uniq";

function ProductModal(props) {
  const {
    product,
    currency,
    discountedprice,
    finalproductprice,
    finaldiscountedprice,
    images,
  } = props;

  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  const [selectedProductColor, setSelectedProductColor] = useState("");
  const [selectedProductSize, setSelectedProductSize] = useState("");
  const [selectedProductMaterial, setSelectedProductMaterial] = useState("");

  const [productStock, setProductStock] = useState(
    product.availableForSale ? 10 : 0
  );

  const [quantityCount, setQuantityCount] = useState(1);

  const wishlistItem = props.wishlistitem;

  const addToCart = props.addtocart;
  const addToWishlist = props.addtowishlist;

  const addToast = props.addtoast;
  const cartItems = props.cartitems;

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize,
    selectedProductMaterial
  );

  const shortDescription = get(product, "description");

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };

  const variants = {
    colors: [],
    sizes: [],
    materials: [],
  };

  //   const variants = [];

  product.variants.forEach(variant => {
    variant.selectedOptions.forEach(option => {
      switch (option.name) {
        case "Size":
          variants.sizes.push(option.value);
          break;
        case "Color":
          variants.colors.push(option.value);
          break;
        case "Material":
          variants.materials.push(option.value);
          break;
        default:
          break;
      }
    });
  });

  console.log(variants);

  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className="product-quickview-modal-wrapper"
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="product-large-image-wrapper">
                <Swiper {...gallerySwiperParams}>
                  {images &&
                    images.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <img
                              src={single.src}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
              <div className="product-small-image-wrapper mt-15">
                <Swiper {...thumbnailSwiperParams}>
                  {images &&
                    images.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <img
                              src={single.src}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-details-content quickview-content">
                <h2>{product.title}</h2>
                <div className="product-details-price">
                  {discountedprice !== null && discountedprice > 0 ? (
                    <Fragment>
                      <span>{currency + finaldiscountedprice}</span>{" "}
                      <span className="old">
                        {currency + finalproductprice}
                      </span>
                    </Fragment>
                  ) : (
                    <span>{currency + finalproductprice} </span>
                  )}
                </div>
                <div className="pro-details-list">
                  <p>{shortDescription}</p>
                </div>
                <div className="pro-details-size-color">
                  {variants.colors.length > 0 && (
                    <div className="pro-details-color-wrap">
                      <span>Color</span>
                      <div className="pro-details-color-content">
                        {variants.colors.map((single, key) => {
                          console.log(single);

                          return (
                            <label
                              className={`pro-details-color-content--single ${single}`}
                              key={key}
                            >
                              <input
                                type="radio"
                                value={single}
                                name="product-color"
                                checked={
                                  colors.length === 1 ||
                                  single === selectedProductColor
                                    ? "checked"
                                    : ""
                                }
                                onChange={() => {
                                  setSelectedProductColor(single);
                                  setSelectedProductSize(sizes[key]);
                                  setSelectedProductMaterial(materials[key]);
                                  setQuantityCount(1);
                                }}
                              />
                              <span className="checkmark"></span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {sizes.length > 0 && (
                    <div className="pro-details-size">
                      <span>Size</span>
                      <div className="pro-details-size-content">
                        {sizes.map((single, key) => {
                          return (
                            <label
                              className={`pro-details-size-content--single`}
                              key={key}
                            >
                              <input
                                type="radio"
                                value={single}
                                checked={
                                  sizes.length === 1 ||
                                  single === selectedProductSize
                                    ? "checked"
                                    : ""
                                }
                                onChange={() => {
                                  setSelectedProductSize(single);
                                  setSelectedProductMaterial(single);
                                  setSelectedProductSize(single);
                                  setQuantityCount(1);
                                }}
                              />
                              <span className="size-name">{single}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {materials.length > 0 && (
                    <div className="pro-details-size">
                      <span>Material</span>
                      <div className="pro-details-size-content">
                        {materials.map((single, key) => {
                          return (
                            <label
                              className={`pro-details-size-content--single`}
                              key={key}
                            >
                              <input
                                type="radio"
                                value={single}
                                checked={
                                  materials.length === 1 ||
                                  single === selectedProductMaterial
                                    ? "checked"
                                    : ""
                                }
                                onChange={() => {
                                  setSelectedProductMaterial(single);
                                  setQuantityCount(1);
                                }}
                              />
                              <span className="size-name">{single}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount > 1 ? quantityCount - 1 : 1
                        )
                      }
                      className="dec qtybutton"
                    >
                      -
                    </button>
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      value={quantityCount}
                      readOnly
                    />
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount < productStock - productCartQty
                            ? quantityCount + 1
                            : quantityCount
                        )
                      }
                      className="inc qtybutton"
                    >
                      +
                    </button>
                  </div>
                  <div className="pro-details-cart btn-hover">
                    {selectedProductMaterial &&
                    selectedProductSize &&
                    selectedProductColor ? (
                      <button
                        onClick={() =>
                          addToCart(
                            product,
                            addToast,
                            quantityCount,
                            selectedProductColor,
                            selectedProductSize,
                            selectedProductMaterial,
                            images
                          )
                        }
                        disabled={productCartQty >= productStock}
                      >
                        {" "}
                        Add To Cart{" "}
                      </button>
                    ) : (
                      <button disabled>Add To Cart </button>
                    )}
                  </div>
                </div>
                {!selectedProductMaterial &&
                  !selectedProductSize &&
                  !selectedProductColor && (
                    <small>Select Size, color and material</small>
                  )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

ProductModal.propTypes = {
  addtoast: PropTypes.func,
  addtocart: PropTypes.func,
  addtocompare: PropTypes.func,
  addtowishlist: PropTypes.func,
  cartitems: PropTypes.array,
  compareitem: PropTypes.object,
  currency: PropTypes.string,
  discountedprice: PropTypes.number,
  finaldiscountedprice: PropTypes.number,
  finalproductprice: PropTypes.number,
  onHide: PropTypes.func,
  product: PropTypes.object,
  images: PropTypes.array,
  show: PropTypes.bool,
  wishlistitem: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    cartitems: state.cartData,
  };
};

export default connect(mapStateToProps)(ProductModal);
