import React, {Fragment} from "react";
import {Grid, Segment, Image} from "semantic-ui-react";
const Alumni = (props) => {
    return(
        <Fragment>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center' >
          <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <h1>For Alumni</h1>
          </Grid.Column>
          <Grid.Column>
            <Image centered size="large" src="/assets/comingsoon.jpg" />
          </Grid.Column>
          </Grid.Row>
          </Grid>
          </Segment>
          </Fragment>
    )
}
export default Alumni;