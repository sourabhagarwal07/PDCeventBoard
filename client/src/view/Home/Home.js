import React, { Fragment } from "react";
import { Button, Container, Image, Grid, Segment,Divider } from "semantic-ui-react";
import useReactRouter from "use-react-router";

const Home = (props) => {
  return (
    <Fragment>
       <Image centered size="large" src="/assets/logo.png"/>
            {/* <Image centered size="large" src="/assets/logo.png" />
             <h1>Welcome to Professional Development Club!</h1>
             <Image centered size="large" src="/assets/pdcimage.png" /> */}
             <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider></Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <h1>Welcome to Professional Development Club!</h1>
        </Grid.Column>

          

        <Grid.Column>
          
        <Image centered size="large" src="/assets/pdcimage.png" />
          </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
              
    </Fragment>
    
  );
};

export default Home;
