import React, { useState } from "react";

import { Button, Form, Segment } from "semantic-ui-react";

const CreateProject = (props) => {
  const { cancelCreateOpen } = props;

  const [info, setInfo] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>Project Title</label>
          <input placeholder="Project Title" />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <input type="date" placeholder="Date" />
        </Form.Field>
        <Form.Field>
          <label>Skills</label>
          <input placeholder="Required Skills" />
        </Form.Field>
        <Form.Field>
          <label>Desciption</label>
          <input placeholder="Enter the Desciption of the project" />
        </Form.Field>
        <Form.Field>
          <label>Hosted By</label>
          <input placeholder="Enter the name of company hosting" />
        </Form.Field>
        <Button positive type="submit">
          Submit
        </Button>
        <Button onClick={cancelCreateOpen} type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};
export default CreateProject;
