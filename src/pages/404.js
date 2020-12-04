import React, { useState, useEffect } from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import { Link } from "gatsby";

import rootReducer from "../redux/reducers/rootReducer";

import MarDeUranoApp from "../components/MarDeUranoApp";
import ShopLayout from "../components/layouts/ShopLayout";

const NotFound = ({ data, location }) => {
  let store;

  if (typeof window !== `undefined`) {
    store = createStore(
      rootReducer,
      load(),
      composeWithDevTools(applyMiddleware(thunk, save()))
    );
  } else {
    store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunk))
    );
  }

  return (
    <Provider store={store}>
      <MarDeUranoApp>
        <ShopLayout headerTop="visible">
          <div className="shop-area pt-95 pb-100">
            <div className="container d-flex justify-content-center flex-column align-items-center">
              <h2>Page not found</h2>
              <h4>The page you are requesting does not exist</h4>
              <Link className="btn btn-warning text-white" to="/shop">
                Back to shop
              </Link>
            </div>
          </div>
        </ShopLayout>
      </MarDeUranoApp>
    </Provider>
  );
};

export default NotFound;
