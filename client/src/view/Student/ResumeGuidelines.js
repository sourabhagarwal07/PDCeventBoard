import React, { Fragment} from "react";
import {Grid,Segment, Image} from "semantic-ui-react";

const ResumeGuidelines = (props) => {
    return (
        <Fragment>
              <Segment placeholder>
        <Grid columns={2} stackable textAlign='center' >
        <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <h1>Call for Resumes</h1>
        </Grid.Column>
        <Grid.Column>
          <Image centered size="large" src="/assets/pdcimage.png" />
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Segment>
        <ol class="ui list">
  <li>Make sure you arrange the relevant experience to showcase your candidature.</li>
  <li>Highlight skills that match the nature of the job</li>
  <li>Make sure to include LinkedIn profile link</li>
  <li>Limit adding unnecessary line-spacing and content not relevant</li>
      </ol>
      <p>You can find templates and more resources regarding resumes below.</p>
      <a href="https://www.uottawa.ca/career-development-centre/job-search/resume-writing-advice">https://www.uottawa.ca/career-development-centre/job-search/resume-writing-advice</a>
        </Fragment>
    )
}
export default ResumeGuidelines;