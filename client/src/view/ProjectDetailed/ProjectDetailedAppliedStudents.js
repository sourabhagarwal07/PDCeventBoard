import React, { Fragment } from "react";
import { Segment, List, Image } from "semantic-ui-react";

const ProjectDetailedAppliedStudents = ({ appliedStudentsList }) => {
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
        Total {appliedStudentsList.length} Applied Students
      </Segment>
      <Segment attached>
        <List divided relaxed>
          {appliedStudentsList.map((appliedStudent) => {
            return (
              <List.Item key={appliedStudent._id}>
                <List.Content>
                  <List.Header as="a">{appliedStudent.name}</List.Header>
                  <List.Description as="a">
                    {appliedStudent.email}
                  </List.Description>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </Segment>
    </Fragment>
  );
};

export default ProjectDetailedAppliedStudents;
