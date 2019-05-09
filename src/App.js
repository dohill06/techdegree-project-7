import React from 'react';

import Header from './components/Header';
import Gallery from './components/Gallery';

import apiKey from './config';






function App() {
  return (
    <div className="container">
      <Header />

      <Gallery />
    </div>
  );
}

export default App;
