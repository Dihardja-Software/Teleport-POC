import React from 'react'

import Header from './header'
import Footer from './footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-hero-image">
        <div className="home-container01">
          <img
            alt="pastedImage"
            src="/playground_assets/home-arrow-left.png"
            className="home-pasted-image"
          />
          <span className="home-text">
            The Biggest Home Living and Eat-tertainment Center
          </span>
          <img
            alt="pastedImage"
            src="/playground_assets/home-arrow-right.png"
            className="home-pasted-image1"
          />
        </div>
      </div>
      <div className="home-living-world">
        <div className="home-container02">
          <div className="home-container03">
            <img
              alt="pastedImage"
              src="/playground_assets/home-living-world.png"
              className="home-pasted-image2"
            />
          </div>
          <div className="home-container04">
            <h1 className="home-text01">Living World</h1>
            <div className="home-container05"></div>
            <span className="home-text02">
              <span>
                Living World is a shopping center with &quot;Home Living,
                Lifestyle &amp; Eat-ertainment&quot; concept, developed by Kawan
                Lama Group with their broad experience in developing various
                modern retail and shopping centers. Living World continues to
                pursue its noble goal of improving sustainable communities and
                the environment.
              </span>
              <br></br>
              <br></br>
              <span>
                The first Living World started operating in Tangerang in 2011 as
                &quot;The Biggest Home Living&quot;. The second Living World
                opened in Pekanbaru, Riau, in 2018, known as &quot;The Biggest
                Home Living in Sumatera&quot;.
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="home-live-card">
        <div className="home-container06">
          <div className="home-container07">
            <h1 className="home-text07">Live Card</h1>
            <div className="home-container08"></div>
            <span className="home-text08">
              Loyalty program that offers a lot of rewards and benefits for ever
              member. Start from Green Membership, Blue Membership, to our
              highest tier, Premiere Membership. Enjoy all the rewards by
              shopping more at Living World &amp; Living Plaza.
            </span>
            <div className="home-container09">
              <span className="home-text09">Join Live Membership</span>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
              </svg>
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="pastedImage"
              src="/playground_assets/home-live-card.png"
              className="home-pasted-image3"
            />
          </div>
        </div>
      </div>
      <div className="home-container11">
        <div className="home-container12">
          <div className="home-container13">
            <h1 className="home-text10">Download Our Mobile App Now!</h1>
            <span className="home-text11">
              Register yourself to our mobile app and join our membership. More
              benefits and rewards are waiting for yo
            </span>
            <div className="home-container14">
              <div className="home-container15">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
              <ul className="home-ul list">
                <li className="home-li list-item">
                  <span className="home-text12">
                    Earn points every time you shop at Living World &amp; Living
                    Plaza
                  </span>
                </li>
                <li className="home-li1 list-item">
                  <span className="home-text13">
                    Exchange points with vouchers
                  </span>
                </li>
                <li className="home-li2 list-item">
                  <span className="home-text14">
                    Never miss out latest events &amp; promotions
                  </span>
                </li>
                <li className="home-li3 list-item">
                  <span className="home-text15">
                    Join in our Lucky Draw events
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-container16">
            <img
              alt="pastedImage"
              src="/playground_assets/home-cta-mobile.png"
              className="home-pasted-image4"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
