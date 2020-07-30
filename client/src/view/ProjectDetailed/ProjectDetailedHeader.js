import React, { useContext } from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { UserContext } from "../../common/context/UserProvider";

/**
 * @author @binjiasata
 * @description Project header component included title, hostby,
 *              manage project and delete project button.
 */

const ProjectDetailedHeader = ({ project }) => {
  const eventImageStyle = {
    filter: "brightness(30%)",
  };

  const eventImageTextStyle = {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    width: "100%",
    height: "auto",
    color: "white",
  };

  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image src="/assets/programming.jpeg" fluid style={eventImageStyle} />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={project.title}
                  style={{ color: "white" }}
                />
                <p>
                  Hosted by <strong>{project.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      {userInfo.user && (userInfo.user.company || userInfo.user.admin) ? (
        <Segment attached="bottom">
          <Button color="orange">Manage Project</Button>
          <Button floated="right" color="red">
            Delete Project
          </Button>
        </Segment>
      ) : null}
    </Segment.Group>
  );
};

export default ProjectDetailedHeader;
