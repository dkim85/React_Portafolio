import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">

        <Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
          <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover" }}>
            React Project #1
          </CardTitle>
          <CardText>
            Ullamco adipisicing deserunt aute velit qui sint.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         <Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
          <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover" }}>
            React Project #2
          </CardTitle>
          <CardText>
            Ullamco adipisicing deserunt aute velit qui sint.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         <Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
          <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover" }}>
            React Project #3
          </CardTitle>
          <CardText>
            Ullamco adipisicing deserunt aute velit qui sint.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        </div>        
      )
    } else if(this.state.activeTab ===1){
      return(
        <div><h1>This is MongoDB</h1></div>
      )
    } else if(this.state.activeTab ===2){
    return(
        <div><h1>This is Handlebars</h1></div>
      )
    } else if(this.state.activeTab ===3){
    return(
        <div><h1>This is JavaScript</h1></div>
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
          <Tab>MongoDB</Tab>
          <Tab>handlebars</Tab>
          <Tab>JavaScript</Tab>
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
