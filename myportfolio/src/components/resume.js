import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Resume extends Component {
     render() {
          return(
               <div>
               <Grid>
                    <Cell col={4}>
                         <div style={{textAlign: 'center'}}>
                         <img src="https://media.licdn.com/dms/image/C5603AQGcElUXLo6-aw/profile-displayphoto-shrink_200_200/0?e=1528527600&v=beta&t=Lbh0buJhEyT1yIFB0u7g08roZWdY0fWvFQRfDkut9JM" alt="avatar" style={{height: '200px'}} 
                         />
                         </div>
                         <h2 style={{paddingTop: '2em'}}>Danilo Kim</h2>
                         <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
                         <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>Right Side</Cell>
               </Grid>
               </div>
          )
     }
}

export default Resume;