import React, {Component} from 'react';

import Header from './components/Header';
import Gallery from './components/Gallery';

import apiKey from './config';






class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />

        <Gallery />
      </div>
    );
  }
}


export default App;
