import React from 'react';
import About from './About.jsx';
import Home from './Home.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="body">
      <Home />
      <About />
      </div>
    );
  }
}



export default App;
