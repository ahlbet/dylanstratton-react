import React, { Component } from 'react';

import P5Wrapper from 'react-p5-wrapper';
import sketch1 from '../p5js/sketch3';
import sketch2 from '../p5js/sketch4';

import '../css/App.css';
import '../css/home.css';

import headshot from '../img/headshot.jpg';

class Home extends Component {
  render() {
    return (
      <div>
      	<div className="home-wrap">
          <P5Wrapper sketch={sketch1} />
      		<img id="headshot" src={headshot} alt="Dylan Stratton Headshot" />
          <P5Wrapper sketch={sketch2} />
          <div className="intro">
            <p>Welcome! Feel free to poke around and experiment. If you are an employer: Hello, I would love to chat. If you are an artist: Hello hello, let's create. If you are simply a passerby: Wander on.</p>
          </div>
      	</div>
      </div>
    );
  }
}

export default Home;