import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>about - Discrete Frivolous Bee</title>
        <meta property="og:title" content="about - Discrete Frivolous Bee" />
      </Helmet>
      <div className="about-container1"></div>
    </div>
  )
}

export default About
