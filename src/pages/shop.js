import React from "react";

import { graphql } from "gatsby";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import get from "lodash/get";

import rootReducer from "../redux/reducers/rootReducer";
import "../assets/scss/style.scss";

import { fetchProducts } from "../redux/actions/productActions";

import MarDeUranoApp from "../components/MarDeUranoApp";
import ShopApp from "../components/ShopApp";

const Shop = ({ data }) => {
  const products = get(data, "allShopifyProduct.nodes");

  const store = createStore(
    rootReducer,
    load(),
    composeWithDevTools(applyMiddleware(thunk, save()))
  );

  store.dispatch(fetchProducts(products));

  return (
    <Provider store={store}>
      <MarDeUranoApp>
        <ShopApp></ShopApp>
      </MarDeUranoApp>
    </Provider>
  );
};

export const query = graphql`
  query Products {
    allShopifyProduct {
      nodes {
        shopifyId
        title
        availableForSale
        description
        handle
        publishedAt
        priceRange {
          minVariantPrice {
            currencyCode
            amount
          }
          maxVariantPrice {
            currencyCode
            amount
          }
        }
        variants {
          shopifyId
          availableForSale
          selectedOptions {
            name
            value
          }
        }
        images {
          localFile {
            childImageSharp {
              fixed(width: 600, height: 800) {
                src
              }
            }
          }
        }
      }
    }
  }
`;
export default Shop;
