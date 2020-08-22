import React, { useState, useContext } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import Axios from "axios";
import { config } from "../../../common/config/config";
import UploadResume from "./UploadResume";
import { UserContext } from "../../../common/context/UserProvider";
import TextareaAutosize from "react-textarea-autosize";

const ApplyForm = (props) => {
  const path = config();
  const projectId = props.match.params.id;
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [applyInfo, setApplyInfo] = useState({
    projectId: projectId,
    name: "",
    email: userInfo.user.email,
    studentNumber: "",
    description: "",
    resume: "",
    isApplied: true, // isApplied do not use for now
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    Axios.post(path + "student/apply", applyInfo)
      .then((res) => {
        if (res.data === "You have already applied") {
          alert("You have already applied for this project!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
    props.history.push("/project-list");
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
            placeholder="Your email"
            disabled
          />
        </Form.Field>

        <Form.Field
          control={TextareaAutosize}
          name="description"
          label="Description explaining why you're interested in this project"
          placeholder="Enter your description"
          onChange={handleFormChange}
          value={applyInfo.description}
        ></Form.Field>

        <Form.Field>
          <label>Upload your resume</label>
          <UploadResume applyInfo={applyInfo} setApplyInfo={setApplyInfo} />
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
