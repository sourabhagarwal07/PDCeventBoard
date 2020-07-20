import React from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";

const ProjectDetailedInfo = ({ projects }) => {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{projects.date}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{projects.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="code branch" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>Skills</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
};

export default ProjectDetailedInfo;
