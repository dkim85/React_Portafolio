import React, { Component } from "react";
import { Grid, Cell} from "react-mdl";

class Contact extends Component {
  render() {
    return <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h2>Danilo Kim</h2>
          <img 
            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/13680683_10153788934593568_6210275365148678664_n.jpg?_nc_cat=0&oh=6ec4f1becc0d9b5d7618a46246e462b7&oe=5B7073F4"
            alt="danilo in Guanujuato"
            style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Eu veniam ex nulla quis.</p>
          </Cell>
          <Cell col={6}>Half Page</Cell>
        </Grid>
      </div>;
  }
}

export default Contact;
