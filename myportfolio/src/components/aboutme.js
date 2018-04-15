import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import YouTube from 'react-youtube';


class Aboutme extends Component {
  render() {
    return <div style={{ width: "100", margin: "auto" }}>
        <Grid className="aboutme-grid">
          <Cell col={12}>
        
            <div className="description-text">
              <h1>About Me</h1>
              <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/1618153_10152044980953568_453122543_o.jpg?_nc_cat=0&oh=4c4daa4d209000a983f209c340e35798&oe=5B709153" alt="cafetero" className="about-img" />
              <p>Hello! My name is Danilo Kim, and I'm a Southern-Californian based freelancer. I am currently graduated from UCI Coding Bootcamp in April 7th, 2018.<br/>
              I have a diverse set of junior web development skills, ranging from HTML + CSS + Javascript all the way to React, bootstrap, Git and Angular...Still need to grow as developer. The journey just begins!</p>
              <hr />
              <p>
                Javascript | HTML/CSS | MongoDB | NodeJs | Music | Business
                | Politics
              </p>
              <div className="social-links">
                {/* LinkeedIn */}
                <a href="linkedin.com/in/danilokim85" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/dkim85" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a href="https://www.freecodecamp.org/dkim85" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>;
  }
}

export default Aboutme;





