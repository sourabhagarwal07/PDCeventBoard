import React, { Fragment } from "react";
import { Image, Grid, Segment } from "semantic-ui-react";
import "./Home.css";

const Home = (props) => {
  return (
    <Fragment>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center' >
        <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <h1>Welcome to Professional Development Club!</h1>
        </Grid.Column>
        <Grid.Column>
          <Image centered size="large" src="/assets/pdclogo.JPG" />
        </Grid.Column>
        </Grid.Row>
        </Grid>
          <h2 class="center">
            About us
          </h2>  
          <Grid columns={2} stackable textAlign='center' >
          <Grid.Row>
          
          <Grid.Column class="picture">
            <Image centered size="large" src="/assets/homepic1.jpg" />
          </Grid.Column>
          <Grid.Column class="text">
            <h3 class="ui left aligned header">We believe in growing together. Here we provide a platform for you 
              to professionally grow and we put in our best to bridge the gap between you 
              and your dream profession.</h3>
          </Grid.Column>
          </Grid.Row>
          <Grid.Column>
            <h3 class="ui left aligned header">Our job starts with you: understanding what you need, so we can 
              offer you options that make sense.</h3>
          </Grid.Column>
          <Grid.Column>
            <Image centered size="large" src="/assets/homepic2.jpg" />
          </Grid.Column>
          <Grid.Column>
            <Image centered size="large" src="/assets/homepic3.jpg" />
          </Grid.Column>
          <Grid.Column>
            <h3 class="ui left aligned header">Enhance Professional development skills via workshops and seminars
            Provide a platform to discuss issues related to student life and to your specific field of interest.
            Connect with industry and professors</h3>
          </Grid.Column>
        </Grid>
        </Segment>
              
    </Fragment>
    
  );
};

export default Home;
