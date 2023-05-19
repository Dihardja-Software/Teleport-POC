import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <div className="footer-logo">
            <img
              alt={props.pastedImage_alt}
              src={props.pastedImage_src}
              className="footer-pasted-image"
            />
          </div>
          <div className="footer-container2">
            <div className="footer-product-container">
              <span className="footer-text">{props.text1}</span>
              <span className="footer-text01">{props.text2}</span>
              <span className="footer-text02">{props.text3}</span>
            </div>
            <div className="footer-product-container1">
              <span className="footer-text03">{props.text4}</span>
              <span className="footer-text04">{props.text5}</span>
              <span className="footer-text05">{props.text6}</span>
              <span className="footer-text06">{props.text7}</span>
              <span className="footer-text07">{props.text8}</span>
              <span className="footer-text08">{props.text9}</span>
            </div>
            <div className="footer-container3">
              <div className="footer-socials">
                <span className="footer-text09">{props.text10}</span>
                <div className="footer-icon-group">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="footer-icon"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="footer-icon2"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
              <div className="footer-socials1">
                <span className="footer-text10">{props.text11}</span>
                <div className="footer-icon-group1">
                  <img
                    alt={props.pastedImage_alt1}
                    src={props.pastedImage_src1}
                    className="footer-pasted-image1"
                  />
                  <img
                    alt={props.pastedImage_alt2}
                    src={props.pastedImage_src2}
                    className="footer-pasted-image2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="footer-text11">{props.text}</span>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text11: 'Download Our App',
  text8: 'Term & Conditions',
  pastedImage_src1: '/playground_assets/pastedimage-fhe9-1200w.png',
  pastedImage_alt1: 'pastedImage',
  pastedImage_alt2: 'pastedImage',
  text4: 'Home',
  pastedImage_alt: 'pastedImage',
  text2:
    'Jl. Alam Sutera Boulevard No.Kav. 21, Pakulonan, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15325',
  text7: 'Live Card Membership',
  pastedImage_src2: '/playground_assets/pastedimage-9n1s-1200w.png',
  text3: '(021) 53128580',
  text9: 'Privacy Policy',
  text5: 'About Us',
  text6: 'Our Mall',
  text: 'Copyright 2023 © Living World Alam Sutera',
  text1: 'PT Kawan Lama Sejahtera',
  text10: 'Follow Us',
  pastedImage_src: '/playground_assets/pastedimage-l5dv-200h.png',
}

Footer.propTypes = {
  text11: PropTypes.string,
  text8: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  text4: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  text2: PropTypes.string,
  text7: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  text3: PropTypes.string,
  text9: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text10: PropTypes.string,
  pastedImage_src: PropTypes.string,
}

export default Footer
