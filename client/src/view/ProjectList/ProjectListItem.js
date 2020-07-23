import React, { Fragment, useState } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import ProjectListUser from "./ProjectListUser";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";

/**
 * @author @binjiasata
 * @description This is project list item. Get project info from ProjectList.js
 */
const ProjectListItem = ({ project }) => {
  const {
    hostPhotoURL,
    title,
    date,
    description,
    hostedBy,
    user,
    _id,
  } = project;

  const [readMore, setReadMore] = useState(false);
  const [ellipsisText, setEllipsisText] = useState("Read More");
  const [clamped, setClamped] = useState(false);

  // if click Read More button, show content and Collapse button.
  const handleReadMore = () => {
    if (readMore) {
      setReadMore(false);
      setEllipsisText("Read More");
    } else {
      setReadMore(true);
      setEllipsisText("Collapse");
    }
  };

  // if description is clamped, show Read More button,
  // if not, does not show anything.
  const handleReflow = (rleState) => {
    const { clamped, text } = rleState;
    setClamped(clamped);
  };

  return (
    <Fragment>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={hostPhotoURL} />
              <Item.Content>
                <Item.Header as={Link} to={`/project-detail/${_id}`}>
                  {title}
                </Item.Header>
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
              user.map((user) => <ProjectListUser key={user._id} user={user} />)}
          </List>
        </Segment>
        <Segment clearing>
          <LinesEllipsis
            style={{ whiteSpace: "pre-wrap" }}
            text={description}
            ellipsis=""
            maxLine={readMore ? "50" : "3"}
            trimRight
            basedOn="letters"
            onReflow={handleReflow}
          ></LinesEllipsis>
          {/* <a href="#" onClick={handleReadMore}>
            {ellipsisText}
          </a> */}
          {clamped || ellipsisText === "Collapse" ? (
            <Button
              onClick={handleReadMore}
              basic
              floated="right"
              content={ellipsisText}
            />
          ) : (
            ""
          )}
        </Segment>
      </Segment.Group>
    </Fragment>
  );
};

export default ProjectListItem;
