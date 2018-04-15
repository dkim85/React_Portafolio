import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
  render() {
    return <div style={{ width: "100", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/18815438_10154617616603568_1608126686078017265_o.jpg?_nc_cat=0&oh=68ada32c522278e75300c256613991dd&oe=5B65DD36" alt="cafetero" className="avatar-img" />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javascript | React | NodeJs | Express
                | MongoDB
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

export default Landing;
