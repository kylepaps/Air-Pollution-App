import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home';
import Countries from './components/getcountry';
import States from './components/getstates';
import Cities from './components/getcity';
import CityData from './components/getcitydata';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app-background'>
          <div className='main-container'>
            <Route path="/" exact component={Home} />
            <Route path="/getcountry" exact component={Countries} />
            <Route path="/getstates/:name" exact component={States} />
            <Route path="/getcities/:state/:country" exact component={Cities} />
            <Route path="/getcitydata/:city/:state/:country" exact component={CityData} />
          </div>
        </div>
      </Router>     
    );
  }
}

export default App;

