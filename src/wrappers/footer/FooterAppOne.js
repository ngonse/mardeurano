import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { animateScroll } from "react-scroll";

import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";

const FooterAppOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  extraFooterClass,
  sideMenu,
  logoFooter,
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    if (typeof window !== `undefined`) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== `undefined`) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    if (typeof window !== `undefined`) {
      setScroll(window.scrollY);
    }
  };

  return (
    <footer
      className={`footer-area ${
        backgroundColorClass ? backgroundColorClass : ""
      } ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${extraFooterClass ? extraFooterClass : ""}`}
    >
      {/* <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div>
            <FooterCopyright footerLogo={logoFooter} spaceBottomClass="mb-30" />
          </div>
        </div>
      </div> */}

      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            {/* footer copyright */}
            <FooterCopyright footerLogo={logoFooter} spaceBottomClass="mb-30" />
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={"/faq#size"}>Size chart</Link>
                  </li>
                  <li>
                    <Link to={"/faq#shipping"}>Shipping</Link>
                  </li>
                  <li>
                    <Link to={"/faq#returns"}>Returns</Link>
                  </li>
                  <li>
                    <Link to={"/faq#contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/faq#privacy"}>Privacy</Link>
                  </li>
                  <li>
                    <Link to={"/faq#stock"}>Stockists</Link>
                  </li>
                  <li>
                    <Link to={"/faq"}>FAQ'S</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-8" : "col-lg-4 col-sm-6"
            }`}
          >
            {/* footer newsletter */}
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="ml-70"
              sideMenu={sideMenu}
            />
          </div>
        </div>
      </div>

      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterAppOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default FooterAppOne;
