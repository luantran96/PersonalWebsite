import React from 'react';
import { Motion, spring } from 'react-motion';
import About from './About.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home">
        <Motion
        defaultStyle={{opacity: 0}} // starting style
        style={{opacity: spring(1, {stiffness: 4, damping: 1} )}}  // Animate to
        >

        {(style) => (
          <div
          id="header"
          style={{
            opacity: style.opacity,
          }} 
          >welcome</div>
        )}
        </Motion>
        <div className="down-button"><svg><path className="down-arrow" d="M0 40 L30 72 L60 40"></path></svg> </div>
      </div>
    );
  }
}

export default Home;