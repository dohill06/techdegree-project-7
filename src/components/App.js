import React, {Component} from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header from './Header';
import Gallery from './Gallery';

import apiKey from '../config';






class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">          
          <Header /> 

          <Gallery /> 
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
