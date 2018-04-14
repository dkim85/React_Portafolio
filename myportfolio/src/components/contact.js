import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";

class Contact extends Component {
  render() {
    return <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Danilo Kim</h2>
            <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/13680683_10153788934593568_6210275365148678664_n.jpg?_nc_cat=0&oh=6ec4f1becc0d9b5d7618a46246e462b7&oe=5B7073F4" alt="danilo in Guanujuato" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Me, @ Pipila, Guanuajuato , MX
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (949) 394 3522
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    danilok@uci.edu
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    kimchibcha
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>;
  }
}

export default Contact;
