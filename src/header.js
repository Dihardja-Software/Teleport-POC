import React from "react";

import PropTypes from "prop-types";

import "./header.css";

const Header = (props) => {
  return (
    <header className={`header-header ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="header-navbar-interactive">
        <img
          alt={props.pastedImage_alt41}
          src="/playground_assets/header-logo-blue.png"
          className="header-pasted-image"
        />
        <div data-thq="thq-navbar-btn-group" className="header-btn-group"></div>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="header-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="header-nav"
          >
            <div className="header-container">
              <span className="header-text">{props.text5}</span>
              <span className="header-text01">{props.text11}</span>
              <span className="header-text02">{props.text21}</span>
              <span className="header-text03">{props.text31}</span>
            </div>
            <div className="header-container1">
              <div className="header-container2">
                <span className="header-text04">{props.text41}</span>
                <svg viewBox="0 0 1024 1024" className="header-icon">
                  <path
                    d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                    className=""
                  ></path>
                </svg>
              </div>
              <img
                alt={props.pastedImage_alt31}
                src="/playground_assets/header-profile.png"
                className="header-pasted-image1"
              />
            </div>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="header-burger-menu">
          <svg viewBox="0 0 1024 1024" className="header-icon2">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="header-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="header-nav1"
          >
            <div className="header-container3">
              <img
                alt={props.pastedImage_alt411}
                src={props.pastedImage_src411}
                className="header-pasted-image2"
              />
              <div data-thq="thq-close-menu" className="header-menu-close">
                <svg viewBox="0 0 1024 1024" className="header-icon4">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="header-nav2"
            >
              <span className="header-text05">Home</span>
              <span className="header-text06">About Us</span>
              <span className="header-text07">Our Malls</span>
              <span className="header-text08">Our Projects</span>
              <span className="header-text09">Language</span>
              <span className="header-text10">My Profile</span>
            </nav>
          </div>
        </div>
      </header>
    </header>
  );
};

Header.defaultProps = {
  pastedImage_alt4: "pastedImage",
  pastedImage_src51:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/49b33f8b-5a92-44b5-8b0f-e873f58ce5ea/abb0c727-0d8c-42bd-bb5e-82972e4e7153?org_if_sml=1272",
  pastedImage_alt411: "pastedImage",
  pastedImage_alt5: "pastedImage",
  pastedImage_alt51: "pastedImage",
  text31: "Our Projects",
  pastedImage_src1:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/49b33f8b-5a92-44b5-8b0f-e873f58ce5ea/e65bd9c6-9590-4e2a-bc7c-cb03db23dc7a?org_if_sml=15154",
  pastedImage_alt31: "pastedImage",
  rootClassName: "",
  pastedImage_alt41: "pastedImage",
  pastedImage_src4:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/49b33f8b-5a92-44b5-8b0f-e873f58ce5ea/9b4dfff1-a88e-4bf6-a602-e7ed11769844?org_if_sml=15391",
  text5: "Home",
  pastedImage_src3:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/49b33f8b-5a92-44b5-8b0f-e873f58ce5ea/66579b52-3e75-4e05-aac9-5ea6cecee8a6?org_if_sml=12321",
  pastedImage_alt311: "pastedImage",
  text11: "About Us",
  pastedImage_alt3: "pastedImage",
  text: "Home",
  text41: "EN",
  text3: "Our Projects",
  pastedImage_src31: "/playground_assets/pastedimage-nbw4.svg",
  pastedImage_alt2: "pastedImage",
  text2: "Our Malls",
  text4: "EN",
  text21: "Our Malls",
  text1: "About Us",
  pastedImage_src311:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/49b33f8b-5a92-44b5-8b0f-e873f58ce5ea/66579b52-3e75-4e05-aac9-5ea6cecee8a6?org_if_sml=12321",
  pastedImage_alt511: "pastedImage",
  pastedImage_src:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/49b33f8b-5a92-44b5-8b0f-e873f58ce5ea/d559717d-77ef-474b-8d3d-7d0426f391e2?org_if_sml=16689",
  pastedImage_alt: "pastedImage",
  pastedImage_src2:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/49b33f8b-5a92-44b5-8b0f-e873f58ce5ea/bd3c92b0-e738-4b76-b7e5-b0990a539976?org_if_sml=13567",
  pastedImage_alt1: "pastedImage",
  pastedImage_src41: "/playground_assets/pastedimage-pby9.svg",
  pastedImage_src5:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/49b33f8b-5a92-44b5-8b0f-e873f58ce5ea/abb0c727-0d8c-42bd-bb5e-82972e4e7153?org_if_sml=1272",
  pastedImage_src411: "/playground_assets/pastedimage-pby9.svg",
  text411: "EN",
  pastedImage_src511:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/49b33f8b-5a92-44b5-8b0f-e873f58ce5ea/abb0c727-0d8c-42bd-bb5e-82972e4e7153?org_if_sml=1272",
};

Header.propTypes = {
  pastedImage_alt4: PropTypes.string,
  pastedImage_src51: PropTypes.string,
  pastedImage_alt411: PropTypes.string,
  pastedImage_alt5: PropTypes.string,
  pastedImage_alt51: PropTypes.string,
  text31: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_alt31: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_alt41: PropTypes.string,
  pastedImage_src4: PropTypes.string,
  text5: PropTypes.string,
  pastedImage_src3: PropTypes.string,
  pastedImage_alt311: PropTypes.string,
  text11: PropTypes.string,
  pastedImage_alt3: PropTypes.string,
  text: PropTypes.string,
  text41: PropTypes.string,
  text3: PropTypes.string,
  pastedImage_src31: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text21: PropTypes.string,
  text1: PropTypes.string,
  pastedImage_src311: PropTypes.string,
  pastedImage_alt511: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src41: PropTypes.string,
  pastedImage_src5: PropTypes.string,
  pastedImage_src411: PropTypes.string,
  text411: PropTypes.string,
  pastedImage_src511: PropTypes.string,
};

export default Header;
