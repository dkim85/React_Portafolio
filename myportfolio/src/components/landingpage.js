import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
  render() {
    return <div style={{ width: "100", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://avatars1.githubusercontent.com/u/18688674?s=400&u=61e8be77ad6a27be82cb3650beb6b08278a76e2b&v=4" alt="cafetero" className="avatar-img" />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javascript | React | NodeJs | Express
                | MongoDB
              </p>
              <div className="social-links">
                {/* LinkeedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>;
  }
}

export default Landing;
