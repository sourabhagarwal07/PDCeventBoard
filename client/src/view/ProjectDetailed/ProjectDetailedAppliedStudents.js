import React, { Fragment } from "react";
import { Segment, List, Button } from "semantic-ui-react";
import useReactRouter from "use-react-router";

const ProjectDetailedAppliedStudents = ({ appliedStudentsList }) => {
  const { history } = useReactRouter();

  const handleGoStudentList = () => {
    const path = {
      pathname: "/students/list",
      state: appliedStudentsList,
    };
    history.push(path);
  };

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
        <Button basic color="teal" onClick={handleGoStudentList}>
          Go to applied student list
        </Button>
        <List divided relaxed>
          {appliedStudentsList.map((appliedStudent) => {
            return (
              <List.Item key={appliedStudent._id}>
                <List.Content>
                  <List.Header>{appliedStudent.name}</List.Header>
                  <List.Description>{appliedStudent.email}</List.Description>
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
