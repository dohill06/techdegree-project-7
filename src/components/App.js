import React, {Component} from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header from './Header';
import Gallery from './Gallery';

import apiKey from '../config';






class App extends Component {

  state = {
    searchPic: []
  };

  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(resData => {
        this.setState({searchPic: resData.photos.photo});
      })
      .catch(err => {
        console.log('Error fetching and parsing data', err);
      }); 
  }

  render() {
    console.log(this.state.searchPic);
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
