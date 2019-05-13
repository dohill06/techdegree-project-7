import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Gallery from './Gallery';

import apiKey from '../config';






class App extends Component {

  state = {
    searchPic: [],
    catPic: [],
    dogPic: [],
    compPic: [],
    query: '',
    loading: true
  };

  componentDidMount() {
    this.searchFunc();
    this.searchFunc('cats');
    this.searchFunc('dogs');
    this.searchFunc('computers');
  }

  searchFunc = (query = 'trees') => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(resData => {
        if (query === 'cats') {
          this.setState({
            catPic: resData.photos.photo,
            loading: false
          });
        } else if (query === 'dogs') {
          this.setState({
            dogPic: resData.photos.photo,
            loading: false
          });
        } else if (query === 'computers') {
          this.setState({
            compPic: resData.photos.photo,
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
          {
            (this.state.loading)
            ? <p>Loading...</p> 
            : <Switch>
                <Route exact path="/" render={ () => <React.Fragment>
                    <Header onSearch={this.searchFunc} />               
                    <Gallery data={this.state.searchPic} query={this.state.query} /> 
                  </React.Fragment> } />
                  
                  <Route path="/cats" render={ () => <React.Fragment>
                    <Header onSearch={this.searchFunc('cats')} />
                    <Gallery data={this.state.catPic} query="cats" />
                  </React.Fragment> } />

                  <Route path="/dogs" render={ () => <React.Fragment>
                    <Header onSearch={this.searchFunc('dogs')} />
                    <Gallery data={this.state.dogPic} query="dogs" />
                  </React.Fragment> } /> 
                  
                  <Route path="/computers" render={ () => <React.Fragment>
                    <Header onSearch={this.searchFunc('computers')} />
                    <Gallery data={this.state.compPic} query="computers" />
                  </React.Fragment> } />
              </Switch>
          }         
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
