import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const SVG = (
      <svg version="1.1" id="Calque_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 635.3 844.6" enableBackground="new 0 0 635.3 844.6">
      <path id="z0" fill="none" stroke="#010202" strokeWidth="20" strokeLinejoin="round" strokeMiterlimit="10" d="M259.3,834.6
        c0,0-93.9,4.9-142.4-74c-25.5-41.5-27-117-27-117l0.5-143.5c0,0-1-65-80.3-77.7l0,0c79.3-12.7,79.9-77.7,79.9-77.7l-0.5-143.5
        c0,0,1.5-75.5,27-117c48.5-78.9,142.4-74,142.4-74" style={{'strokeDasharray': 1107.41, 'strokeDashoffset': 0}} />
      <path id="z1" fill="none" stroke="#010202" strokeWidth="20" strokeLinejoin="round" strokeMiterlimit="10" d="M376,834.6
        c0,0,93.9,4.9,142.4-74c25.5-41.5,27-117,27-117l-0.5-143.5c0,0,1-65,80.3-77.7l0,0c-79.3-12.7-79.9-77.7-79.9-77.7l0.5-143.5
        c0,0-1.5-75.5-27-117c-48.5-78.9-142.4-74-142.4-74" style={{'strokeDasharray': 1107.41, 'strokeDashoffset': 0}}/>
    </svg>
    );

    return (
    <div id="about">

      <div id="about-content">
        {SVG}
        <div id="about-text">
          <h1>FULL-STACK <b>DEV</b> </h1>
        </div>
      </div>
    </div>
    );
  }
}

export default About;