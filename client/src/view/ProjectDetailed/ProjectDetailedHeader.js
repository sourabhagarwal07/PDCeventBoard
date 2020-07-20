import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";

const ProjectDetailedHeader = ({ projects }) => {
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
	
	console.log(projects);

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
                  content={projects.title}
                  style={{ color: "white" }}
                />
                <p>
                  Hosted by <strong>{projects.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button color="orange">Manage Project</Button>
      </Segment>
    </Segment.Group>
  );
};

export default ProjectDetailedHeader;
