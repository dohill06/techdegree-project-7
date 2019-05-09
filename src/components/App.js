import React, {Component} from 'react';

import Header from './Header';
import Gallery from './Gallery';

import apiKey from '../config';






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
