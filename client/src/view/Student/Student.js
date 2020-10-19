import React, { Fragment } from "react";
import { Segment, Grid, Image, Button } from "semantic-ui-react";

const Student = (props) => {
  return (
    <Fragment>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <h1>For Students</h1>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/students-uottawa.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <div class="ui inverted segment">
        <div class="ui inverted relaxed divided list">
        <a class="item" target="_blank" href="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=sdof1BV-_Uy1-nIA5U3ra8TWvX0Di8dIjAEMQgqNdlpUQkoxM0ZVNU04VDM4S1ZNWjFTUkJBMEZPSi4u">
            Join Us
          </a>
          <a class="item" href="#/program-coordinators">
            Program Coordinators
          </a>
          <a class="item" href="#/create-form">
            Create or Activate Association
          </a>
          <a class="item" href="#/student-form">
            uOttawa Student Associations
          </a>
          <a class="item" href="#/fswep/">
            Programs Recognized by FSWEP
          </a>
          <a class="item" href="#/useful-links">
          Useful University Resources for Newly Admitted Students
          </a>
          <a
            class="item"
            href="https://professionaldevclub.files.wordpress.com/2020/05/gng5902_proposal-template.docx"
          >
            GNG5902 Project Proposal Form (Click to Download)
          </a>
          <a
            class="item"
            href="https://professionaldevclub.files.wordpress.com/2020/05/elg5902_proposal-template.docx"
          >
            ELG5902 Project Proposal Form (Click to Download)
          </a>
          <a class="item" href="#/resume-guidelines">
            Resume Writing Guidelines
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default Student;
