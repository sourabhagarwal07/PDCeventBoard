import React, { useState, useContext } from "react";
import { Button, Form, Segment, Dropdown } from "semantic-ui-react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";

// Create a new project and show on Project List page.
const CreateProject = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { user } = userInfo;
  const path = config();

  const [info, setInfo] = useState({
    title: "",
    date: "",
    description: "",
    skills: "",
    hostedBy: "",
    hostPhotoURL: "",
    category: [],
    user: [user],
  });

  const categoryOptions = [
    {
      key: "machinelearning",
      text: "Machine Learning",
      value: "Machine Learning",
    },
    { key: "web", text: "Web Development", value: "Web Development" },
    { key: "game", text: "Game Development", value: "Game Development" },
  ];

  // handle dropdown category
  const handleCategoryChange = (e, data) => {
    setInfo({
      ...info,
      category: data.value,
    });
  };

  // post project info to server
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // if does not have hostPhotoURL, use a default one
    if (!info.hostPhotoURL) {
      info.hostPhotoURL = "https://img.icons8.com/carbon-copy/2x/company.png";
    }
    Axios.post(path + "project", info)
      .then((res) => {
        console.log(res);
        props.history.push("/project-list");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleFormCancel = () => {
    props.history.push("project-list");
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
        <Form.Field>
          <label>Category</label>
          <Dropdown
            name="category"
            placeholder="Category"
            fluid
            multiple
            selection
            onChange={handleCategoryChange}
            options={categoryOptions}
          />
        </Form.Field>
        <Form.Field>
          <label>Project Picture</label>
          <input
            name="hostPhotoURL"
            value={info.hostPhotoURL}
            onChange={handleFormChange}
            placeholder="Enter the URL of picture"
          />
        </Form.Field>
        <Button positive type="submit">
          Submit
        </Button>
        <Button onClick={handleFormCancel} type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};
export default CreateProject;
