import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { graphql } from "gatsby";
import { SectionsContainer, Section, Header } from "react-fullpage";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import get from "lodash/get";

import rootReducer from "../redux/reducers/rootReducer";
import "../assets/scss/style.scss";

import MarDeUranoApp from "../components/MarDeUranoApp";
import HeaderApp from "../wrappers/header/HeaderApp";

const Home = ({ data }) => {
  const store = createStore(
    rootReducer,
    load(),
    composeWithDevTools(applyMiddleware(thunk, save()))
  );

  const anchors = [];

  const sliderData = get(data, "allContentfulHomeSlider.nodes");

  sliderData.forEach(element => {
    anchors.push(element.id);
  });

  const options = {
    activeClass: "active",
    anchors: anchors,
    arrowNavigation: false,
    className: "SectionsContainer",
    delay: 1000,
    navigation: true,
    scrollBar: false,
    sectionClassName: "Section",
    sectionPaddingTop: "0",
    sectionPaddingBottom: "0",
    verticalAlign: true,
  };

  return (
    <Provider store={store}>
      <MarDeUranoApp>
        <Fragment>
          <MetaTags>
            <title>Mar de Urano</title>
            <meta name="description" content="" />
          </MetaTags>
          <div className="fullpage-slider-wrapper">
            <Header>
              <HeaderApp
                layout="container-fluid"
                headerPaddingClass="header-padding-1"
                headerBgClass="bg-white"
              />
            </Header>
            <SectionsContainer {...options} className="bg-purple-2">
              {sliderData &&
                sliderData.length > 0 &&
                sliderData.map((single, key) => {
                  const imgSlider = get(single, "image.fixed.src");

                  return (
                    <Section key={key}>
                      <div className="slider-section flone-fp-section">
                        <div className="container">
                          <div className="row fullpage-slider-wrap-mrg">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center">
                              <div className="slider-content-11 slider-animated-1 fullpage-slider-mrg fullpage-content">
                                <h3 className="animated">{single.title}</h3>
                                <h1
                                  className="animated"
                                  dangerouslySetInnerHTML={{
                                    __html: single.subtitle,
                                  }}
                                />
                                <div className="slider-btn-11 btn-hover">
                                  <a className="animated" href={single.url}>
                                    SHOP NOW
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="slider12-img-1 slider-animated-1">
                                <img
                                  className="animated"
                                  alt=""
                                  src={imgSlider}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Section>
                  );
                })}
            </SectionsContainer>
          </div>
        </Fragment>
      </MarDeUranoApp>
    </Provider>
  );
};

export const query = graphql`
  query HomeSlider {
    allContentfulHomeSlider {
      nodes {
        id
        title
        subtitle
        url
        image {
          title
          fixed(width: 500, height: 540) {
            src
          }
        }
      }
    }
  }
`;

export default Home;
