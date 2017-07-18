import React, { Component } from 'react';

import P5Wrapper from 'react-p5-wrapper';
import aboutSketch from '../p5js/aboutSketch';

import '../css/about.css';
import '../css/App.css';

import aboutImg from '../img/about.jpg';

class About extends Component {
  render() {
    return (
      <div>
				<div className="about-wrap">
					<h1 className="page-header">About</h1>

					<div className="about-content">

						<img id="about-img" src={aboutImg} alt="Dylan Stratton"/>

						<p className="bio"><strong>I am a multifaceted artist with reaches in design, development, digital art, photography, e-poetry, and theatre.</strong> I enjoy making the web a more adventurous place with my code - a place of discovery, creation, and movement. I use technologies like HTML5, CSS3, SASS, Jekyll, JavaScript, jQuery, p5.js, and Photoshop to realize my digital playgrounds. I am always working towards lengthening that list. And based on my photos, I obviously only own one t-shirt.</p>

						<P5Wrapper id="about-sketch" sketch={aboutSketch} />

					</div>
				</div>
      </div>
    );
  }
}

export default About;