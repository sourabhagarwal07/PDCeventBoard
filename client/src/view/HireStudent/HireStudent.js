import React, { Fragment } from "react";
import { Segment, Grid, Image, Button } from "semantic-ui-react";

const HireStudent = (props) => {
  return (
    <Fragment>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <h1>Hire Students</h1>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/employer-uottawa.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <p>
        If your company has projects just let us know on the contact email.
        Share the details about the projects and we can get you the most suited
        student for that project.
      </p>
      <p>Email us on : pdcuottawa@gmail.com</p>
      <p>We will require following details for the project:</p>
      <div class="ui bulleted list">
        <div class="item">Company Name</div>
        <div class="item"> Linked-in Profile (optional)</div>
        <div class="item">Contact information </div>
        <div class="item"> Title of the project</div>
        <div class="item">
          Short description of the Project including the number of available
          positions and application deadline
        </div>
      </div>
    </Fragment>
  );
};

export default HireStudent;
