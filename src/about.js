import React from 'react'

import Header from './header'
import Footer from './footer'
import './about.css'
import './style.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="about-title">
        <h1 className="about-text">About Us</h1>
        <div className="about-container1"></div>
      </div>
      <div className="about-our-story">
        <div className="about-container2">
          <div className="about-container3">
            <h1 className="about-text01">Our Story</h1>
            <span className="about-text02">
              <span>
                With more than 200 fashion &amp; lifestyle tenants, Living World
                delivers different shopping experience to customers by bringing
                exciting tenants. We also have a lot of programs and events.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                If you are interested to be partnered with us, for further
                information, please contact us.With more than 200 fashion &amp;
                lifestyle tenants, Living World delivers different shopping
                experience to customers by bringing exciting tenants. We also
                have a lot of programs and events.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                If you are interested to be partnered with us, for further
                information, please contact us.
              </span>
            </span>
          </div>
          <div className="about-container4">
            <img
              alt="pastedImage"
              src="/playground_assets/about-our-story.png"
              className="about-pasted-image"
            />
          </div>
        </div>
      </div>
      <div className="about-container5">
        <div className="about-container6">
          <div className="about-container7">
            <span className="about-text10">Vision</span>
            <span className="about-text11">
              With more than 200 fashion &amp; lifestyle tenants, Living World
              delivers different shopping experience to customers by bringing
              exciting tenants.
            </span>
          </div>
          <div className="about-container8">
            <span className="about-text12">Mission</span>
            <span className="about-text13">
              With more than 200 fashion &amp; lifestyle tenants, Living World
              delivers different shopping experience to customers by bringing
              exciting tenants.
            </span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default About
