import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://s2.dmcdn.net/mhPQ3.png) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
              <p>South Park Clicky Game</p>
              <p>The idea of the game is to click on the cards without clicking on the same one twice until you click all cards once.
              If you click on the same card you have to start again. Have fun!</p>
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover"
              }}
            >
              Under Development
            </CardTitle>
            <CardText>
              Ullamco adipisicing deserunt aute velit qui sint.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>;
    } else if(this.state.activeTab ===1){
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.flashbynight.com/tutes/hangmanhtml5/man.png) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
              <p>Constructor Hangman</p>
              <p>A hangman command-line game using javascript constructor functions.</p>
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://codeslo.com/wp-content/uploads/2017/03/javascript-monitor.jpg) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
              <p>Under Development</p>
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab ===2){
    return(
      <div className="projects-grid">
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(https://camo.githubusercontent.com/091306c70a4f37b5db878c98716efb155ca09699/68747470733a2f2f7261772e6769746875622e636f6d2f636170746e77616c6b65722f6c6972692d626f742f6d61737465722f73637265656e73686f742f73637265656e73686f742e676966) center / cover"
          }}
        >
        </CardTitle>
        <CardText>
          <p>Liri Boot</p>
          <p>In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.</p>
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(http://samerit.ir/wp-content/uploads/2018/02/2.jpg)center / cover"
          }}
        >
        </CardTitle>
        <CardText>
        <p>Under Development</p>
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>Heroku</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    </div>
      )
    } else if(this.state.activeTab ===3){
    return(
      <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://static1.squarespace.com/static/5a1f1f9749fc2b66452a7658/t/5a1f7a848165f5ee9e4d9947/1512012434177/003.png?format=750w) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
              <p>Scrape News Articles</p>
              <p>In this app users view the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from another site.</p>
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://stevefrancia.com/img/mongodb.png) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
            <p>Under Development</p>
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
    )
  }
}

  render() {
    return( 
    <div>
        <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState(
              { activeTab: tabId }
            )} ripple>
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>NodeJs</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
        <Cell col={12}>
        <div className="content">{this.toggleCategories()}</div>
        </Cell>
        </Grid>
    </div>
    )
  }
}

export default Projects;
