import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Gallery from './Gallery';
import NoRoute from './NoRoute';

import apiKey from '../config';






class App extends Component {

  state = {
    homePic: [],
    searchPic: [],
    catPic: [],
    dogPic: [],
    compPic: [],
    query: '',
    loading: true
  };

  componentDidMount() {
    this.searchFunc();
    this.searchFunc('house');
    this.searchFunc('cats');
    this.searchFunc('dogs');
    this.searchFunc('computers');
  }

  searchFunc = (query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(resData => {
        if (query === 'cats') {
          this.setState({
            catPic: resData.photos.photo
          });
        } else if (query === 'dogs') {
          this.setState({
            dogPic: resData.photos.photo
          });
        } else if (query === 'computers') {
          this.setState({
            compPic: resData.photos.photo 
          });
        } else if (query === 'house') {
          this.setState({
            homePic: resData.photos.photo,
            loading: false
          });
        } else {
          this.setState({
            searchPic: resData.photos.photo,
            query: `${query}`,
            loading: false
          });
        }
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
            <Switch>
              <Route exact path="/" render={ () => 
                (this.state.loading) 
                ? 
                <p>Loading...</p>                               
                : <Gallery data={this.state.homePic} query="Flickr App" /> 
              } />
                
              <Route exact path="/cats" render={ () => 
                <Gallery data={this.state.catPic} query="cats" />
              } />

              <Route exact path="/dogs" render={ () => 
                <Gallery data={this.state.dogPic} query="dogs" />
              } /> 
                
              <Route exact path="/computers" render={ () => 
                <Gallery data={this.state.compPic} query="computers" />
              } />

              <Route exact path="/search/:q" render={ () => 
                (this.state.loading) 
                ? 
                <p>Loading...</p>                    
                : <Gallery data={this.state.searchPic} query={this.state.query} /> 
              } /> 
                           

              <Route component={NoRoute} />
            </Switch>               
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
