import React, { useState } from "react";

import { Button, Form, Segment } from "semantic-ui-react";

// Create a new project and show on Project List page.
const CreateProject = (props) => {
  const { cancelCreateOpen, createProject } = props;

  const [info, setInfo] = useState({
    title: "",
    date: "",
    description: "",
    skills: "",
    hostedBy: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createProject(info);
  };

  const handleFormChange = ({ target: { name, value } }) => {
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <Segment>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        <Form.Field>
          <label>Project Title</label>
          <input
            name="title"
            value={info.title}
            onChange={handleFormChange}
            placeholder="Project Title"
          />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <input
            name="date"
            value={info.date}
            onChange={handleFormChange}
            type="date"
            placeholder="Date"
          />
        </Form.Field>
        <Form.Field>
          <label>Skills</label>
          <input
            name="skills"
            value={info.skills}
            onChange={handleFormChange}
            placeholder="Required Skills"
          />
        </Form.Field>
        <Form.Field>
          <label>Desciption</label>
          <input
            name="description"
            value={info.description}
            onChange={handleFormChange}
            placeholder="Enter the Desciption of the project"
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted By</label>
          <input
            name="hostedBy"
            value={info.hostedBy}
            onChange={handleFormChange}
            placeholder="Enter the name of company hosting"
          />
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
