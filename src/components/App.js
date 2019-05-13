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
    this.searchFunc();
  }

  searchFunc(query) {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(resData => {
        this.setState({
          searchPic: resData.photos.photo
        });
      })
      .catch(err => {
        console.log('Error fetching and parsing data', err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">          
          <Header onSearch={this.searchFunc} /> 

          <Gallery data={this.state.searchPic} /> 
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
