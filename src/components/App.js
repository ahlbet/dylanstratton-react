import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
