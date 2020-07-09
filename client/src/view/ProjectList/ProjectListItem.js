import React, { Fragment } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import ProjectListUser from "./ProjectListUser";

/**
 * @author @binjiasata
 * @description This is project list item. Get project info from ProjectList.js
 */
const ProjectListItem = ({ project }) => {
  const { hostPhotoURL, title, date, description, hostedBy, user } = project;

  return (
    <Fragment>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {date}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {user &&
              user.map((user) => <ProjectListUser key={user.id} user={user} />)}
          </List>
        </Segment>
        <Segment clearing>
          <span>{description}</span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    </Fragment>
  );
};

export default ProjectListItem;
