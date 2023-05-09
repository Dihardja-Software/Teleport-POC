import React from 'react'

import './rectangle1.css'

const Rectangle1 = (props) => {
  return (
    <div className="rectangle1-container">
      <div className="rectangle1-dummy-container">
        <img
          alt="Rectangle112"
          src="/playground_assets/Rectangle-1.png"
          loading="lazy"
          className="rectangle1-rectangle1"
        />
        <span className="rectangle1-text">
          Hahahahahahah how to use this teleport? Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Cras eget tellus iaculis, convallis nisl quis,
          iaculis ante. Phasellus eleifend pharetra rutrum. Nam in eros
          eleifend, convallis velit vel, mollis est. Integer varius eu enim ac
          varius. Sed dictum mi nisi, vel lacinia urna dignissim eget. Vivamus
          feugiat velit nisl, vel dapibus urna maximus quis. Donec volutpat
          auctor suscipit. Donec porta neque vitae egestas varius. Nam euismod
          mauris ligula, a consequat urna pharetra in.
        </span>
        <span className="rectangle1-text1">
          <span>testing title</span>
        </span>
        <button className="rectangle1-button button">Button</button>
      </div>
    </div>
  )
}

export default Rectangle1
