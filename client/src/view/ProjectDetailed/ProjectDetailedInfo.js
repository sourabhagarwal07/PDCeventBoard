import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";

/**
 * @author @binjiasata
 * @description project details included date, description, skills
 *
 */

const ProjectDetailedInfo = ({ project }) => {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>
              {project.startDate}
              {project.expireDate ? "  To  " + project.expireDate : ""}
            </span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{project.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="code branch" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{project.skills}</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
};

export default ProjectDetailedInfo;
