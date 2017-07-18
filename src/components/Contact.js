import React, { Component } from 'react';
import '../css/App.css';
import '../css/contact.css';

import selfself from '../img/selfself.gif';

class Contact extends Component {
  render() {
    return (
      <div>
      	<div className="contact-wrap">
      		<h1>Contact</h1>

      		<div className="contact-content">
      			<img src={selfself} alt="Self Gif" className="contact-gif" />
      			<div className="contact-info">
      				<p>I love collaborations of all kinds. If you have a project you'd like to work on, don't hesitate to contact me. Whether it be web development, digital art, or theatre, I am interested in creating. You can check out more of my digital art at <a target="_blank" href="http://ahlbet.weebly.com/">ahlbet.weebly.com</a> or at <a target="_blank" href="http://www.callosummagazine.com/home?tag=Dylan+Stratton">callosummagazine.com</a>. Email is the best way to reach me.</p>

            	<a id="email" href="mailto:dm.stratton94@gmail.com">dm.stratton94@gmail.com</a>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Contact;