import React, { Fragment } from "react";
import { Segment, Item, Label } from "semantic-ui-react";

const ProjectDetailedSidebar = ({ projects }) => {
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
              src={projects.user.map((user) => user.photoURL)}
            />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                {projects.user.map((user) => user.name)}
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Fragment>
  );
};

export default ProjectDetailedSidebar;
