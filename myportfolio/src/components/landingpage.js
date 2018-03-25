import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
  render() {
    return <div style={{ width: "100", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://avatars1.githubusercontent.com/u/18688674?s=400&u=61e8be77ad6a27be82cb3650beb6b08278a76e2b&v=4" 
            alt="cafetero"
            className="avatar-img"
            />
          </Cell>
        </Grid>
      </div>;
  }
}

export default Landing;
