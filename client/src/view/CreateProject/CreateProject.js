import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Form,
  Segment,
  Dropdown,
  TextArea,
  Checkbox,
} from "semantic-ui-react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";

/**
 * @author @binjiasata
 * @description Create a new project and show on Project List page.
 *              Post the new project to server.
 */
const CreateProject = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { user } = userInfo;
  const path = config();
  const [isDisable, setIsDisable] = useState(true);

  // project information
  const [info, setInfo] = useState({
    title: "",
    startDate: "",
    expireDate: "",
    description: "",
    skills: "",
    hostedBy:
      user && user.admin ? "EGS-PDC" : user.company ? "Company Name" : "",
    hostPhotoURL: "",
    category: [],
    user: [user],
  });

  /**
   * Category options:
   * include Machine Learning, Web Development, Game Development for now.
   */
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

  // when click cancel, go back to the project list page
  const handleFormCancel = () => {
    props.history.push("project-list");
  };

  // handle form field change
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
          <label>Start Date</label>
          <input
            name="startDate"
            value={info.startDate}
            onChange={handleFormChange}
            type="date"
            placeholder="Start Date"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            onClick={() => setIsDisable(!isDisable)}
            label="Set a expire date on project (Default is 4 weeks)"
          />
        </Form.Field>
        <Form.Field>
          <label>Expire Date</label>
          <input
            name="expireDate"
            value={info.expireDate}
            onChange={handleFormChange}
            disabled={isDisable}
            type="date"
            placeholder="Expire Date"
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
          <label>Add Logo</label>
          <input
            name="hostPhotoURL"
            value={info.hostPhotoURL}
            onChange={handleFormChange}
            placeholder="Enter the URL of logo"
          />
        </Form.Field>
        <Form.Field>
          <label>Desciption</label>
          <TextArea
            name="description"
            rows={3}
            value={info.description}
            onChange={handleFormChange}
            placeholder="Enter the Desciption of the project"
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
