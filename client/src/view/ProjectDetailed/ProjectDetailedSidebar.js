import React, { Fragment } from "react";
import { Segment, Item, Label } from "semantic-ui-react";

/**
 * @author @binjiasata
 * @description Project detail sidebar, show the principal of this project.
 *
 */

const ProjectDetailedSidebar = ({ project }) => {
  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        Organizer
      </Segment>
      <Segment attached>
        <Item.Group divided>
          <Item style={{ position: "relative" }}>
            <Label
              style={{ position: "absolute" }}
              color="orange"
              ribbon="right"
            >
              Host
            </Label>
            <Item.Image
              size="tiny"
              rounded
              src={project.user && project.user.map((user) => user.picture)}
            />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                {project.user && project.user.map((user) => user.name)}
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Fragment>
  );
};

export default ProjectDetailedSidebar;
