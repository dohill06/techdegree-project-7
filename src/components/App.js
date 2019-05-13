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
    searchPic: [],
    query: '',
    loading: true
  };

  componentDidMount() {
    this.searchFunc();
  }

  searchFunc = (query = 'trees') => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(resData => {
        this.setState({
          searchPic: resData.photos.photo,
          query: `${query}`,
          loading: false
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
          {
            (this.state.loading)
            ? <p>Loading...</p> 
            : <React.Fragment>
                <Header onSearch={this.searchFunc} />               
                <Gallery data={this.state.searchPic} query={this.state.query} /> 
              </React.Fragment>
          }         
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
