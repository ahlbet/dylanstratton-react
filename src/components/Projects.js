import React, { Component } from 'react';

import P5Wrapper from 'react-p5-wrapper';
import projectsSketch from '../p5js/projectsSketch';

import '../css/projects.css';
import '../css/App.css';

import marble from '../img/marble.png';
import ponds from '../img/ponds.png';
import raft from '../img/raft.png';
import shakes from '../img/shakes.png';

class Projects extends Component {
  render() {
    return (
      <div>
      	<div className="projects-wrap">
      		<h1 className="page-header">Projects</h1>

      		<div className="sub-page-projects-header">
      			<p className="projects-summary">Below are my current web development projects! I am always working on something new, so check back later and the list will be longer. Ask me anything about them!</p>
      			<P5Wrapper sketch={projectsSketch} />
      		</div>

      		<div className="projects">
      			<div className="project marble">
      				<img className="project-img" src={marble} alt="Marble Eyes Website"/>
      				<p className="project-description"><a target="_blank" href="https://ahlbet.github.io/marble-eyes">Explore</a> the Marble Eyes Website</p>
      			</div>
      			<div className="project ponds">
      				<img className="project-img" src={ponds} alt="Ponds Poetry Project"/>
      				<p className="project-description"><a target="_blank" href="https://ahlbet.github.io/Ponds">Create</a> with the Ponds projects!</p>
      			</div>
      			<div className="project raft">
      				<img src={raft} alt="Her / raft / She" className="project-img"/>
      				<p className="project-description"><a target="_blank" href="https://ahlbet.github.io/experiments/her-raft-she/home.html">Read</a> the play Her / raft / She!</p>
      			</div>
      			<div className="project shakes">
      				<img src={shakes} alt="Search Shakespeare" className="project-img"/>
      				<p className="project-description"><a target="_blank" href="https://ahlbet.github.io/Shakespeare/">Search</a> through Shakespeare's plays!</p>
      			</div>
      		</div>

      	</div>
      </div>
    );
  }
}

export default Projects;