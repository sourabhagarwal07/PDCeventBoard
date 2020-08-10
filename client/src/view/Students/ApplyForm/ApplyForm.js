import React, { useState } from "react";
import { Segment, Form, TextArea, Button } from "semantic-ui-react";
import UploadFile from "../../CreateProject/UploadFile";
import Axios from "axios";
import { config } from "../../../common/config/config";

const ApplyForm = (props) => {
  const path = config();
  const projectId = props.match.params.id;

  const [applyInfo, setApplyInfo] = useState({
    projectId: projectId,
    name: "",
    email: "",
    studentNumber: "",
    description: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    Axios.post(path + "student/apply", applyInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleFormChange = ({ target: { name, value } }) => {
    setApplyInfo({
      ...applyInfo,
      [name]: value,
    });
  };
  return (
    <Segment>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        <Form.Field>
          <label>Your Name</label>
          <input
            name="name"
            value={applyInfo.name}
            onChange={handleFormChange}
            placeholder="Your Name"
          />
        </Form.Field>

        <Form.Field>
          <label>Student Number</label>
          <input
            name="studentNumber"
            value={applyInfo.studentNumber}
            onChange={handleFormChange}
            placeholder="Student Number"
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value={applyInfo.email}
            onChange={handleFormChange}
            placeholder="Your Email"
          />
        </Form.Field>

        <Form.Field>
          <label>
            Description explaining why you're interested in this project
          </label>
          <TextArea
            name="description"
            value={applyInfo.description}
            onChange={handleFormChange}
            rows={3}
            placeholder="Enter your description"
          />
        </Form.Field>

        <Form.Field>
          <label>Upload your resume</label>
          <UploadFile />
        </Form.Field>

        <Button positive type="submit">
          Submit
        </Button>
        <Button type="button" onClick={() => props.history.goBack()}>
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};

export default ApplyForm;
