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
            : <Switch>
                <Route exact path="/" render={ () => <React.Fragment>
                    <Header onSearch={this.searchFunc} />               
                    <Gallery data={this.state.searchPic} query={this.state.query} /> 
                  </React.Fragment> } />
                  
                  <Route path="/cats" render={ () => <React.Fragment>
                    <Header onSearch={this.searchFunc('cats')} />
                    <Gallery data={this.state.searchPic} query={this.state.query} />
                  </React.Fragment> } />

                  <Route path="/dogs" render={ () => <React.Fragment>
                    <Header onSearch={this.searchFunc('dogs')} />
                    <Gallery data={this.state.searchPic} query={this.state.query} />
                  </React.Fragment> } /> 
                  
                  <Route path="/computers" render={ () => <React.Fragment>
                    <Header onSearch={this.searchFunc('computers')} />
                    <Gallery data={this.state.searchPic} query={this.state.query} />
                  </React.Fragment> } />
              </Switch>
          }         
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
