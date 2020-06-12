import React from "react";

import { Link, graphql } from "gatsby";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import get from "lodash/get";

import rootReducer from "../redux/reducers/rootReducer";

import { fetchProducts } from "../redux/actions/productActions";

import MarDeUranoApp from "../components/MarDeUranoApp";
import Cart from "../components/Cart";

const Art = ({ data }) => {
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
        <Cart />
      </MarDeUranoApp>
    </Provider>
  );
};

export default Art;
