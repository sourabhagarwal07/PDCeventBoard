import React, { useState, useContext } from "react";
import { Button, Form, Segment, Dropdown, Checkbox } from "semantic-ui-react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import UploadLogo from "./UploadLogo";
import TextareaAutosize from "react-textarea-autosize";

/**
 * @author @binjiasata
 * @description Create a new project and show on Project List page.
 *              Post the new project to server.
 */
const CreateProject = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  // get state from project detail manage button
  const { state } = props.location;
  const { id } = props.match.params;
  const { user } = userInfo;
  const path = config();
  const [isDisable, setIsDisable] = useState(true);

  // project information
  const [info, setInfo] = useState({
    title: state ? state.title : "",
    postedOn: state ? state.postedOn : "",
    validUntil: state ? state.validUntil : "",
    description: state ? state.description : "",
    skills: state ? state.skills : "",
    hostedBy: state
      ? state.hostedBy
      : user && user.admin
      ? "EGS-PDC"
      : user.company
      ? "Company Name"
      : "",
    logoUrl: state ? state.logoUrl : "",
    category: state ? state.category : [],
    user: state ? state.user : [user],
    contactEmail: state ? state.contactEmail : "",
    contactPhone: state ? state.contactPhone : "",
    linkedinProfile: state ? state.linkedinProfile : "",
    isDeleted: state ? state.isDeleted : false,
    uploadStatus: "none",
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
    // if does not have logoUrl, use a default one
    if (!info.logoUrl) {
      info.logoUrl = "https://img.icons8.com/carbon-copy/2x/company.png";
    }

    if (id) {
      Axios.post(path + "project/manage/" + id, info).then((res) => {
        props.history.push("/project-list");
      });
    } else {
      Axios.post(path + "project", info)
        .then((res) => {
          props.history.push("/project-list");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  // when click cancel, go back to the project list page
  const handleFormCancel = () => {
    props.history.push("/project-list");
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

        <Form.Group widths="equal">
          <Form.Field>
            <label>Contact Email</label>
            <input
              name="contactEmail"
              value={info.contactEmail}
              onChange={handleFormChange}
              placeholder="Contact Email"
            />
          </Form.Field>

          <Form.Field>
            <label>Contact Phone</label>
            <input
              name="contactPhone"
              value={info.contactPhone}
              onChange={handleFormChange}
              placeholder="Contact Phone"
            />
          </Form.Field>

          <Form.Field>
            <label>LinkedIn Profile</label>
            <input
              name="linkedinProfile"
              value={info.linkedinProfile}
              onChange={handleFormChange}
              placeholder="Your LinkedIn URL"
            />
          </Form.Field>
        </Form.Group>

        <Form.Field>
          <Checkbox
            onClick={() => setIsDisable(!isDisable)}
            label="Set a expire date on project (Default is 4 weeks)"
          />
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Field>
            <label>Posted On</label>
            <input
              name="postedOn"
              value={info.postedOn}
              onChange={handleFormChange}
              type="date"
              placeholder="Posted On"
            />
          </Form.Field>

          <Form.Field>
            <label>Valid Until</label>
            <input
              name="validUntil"
              value={info.validUntil}
              onChange={handleFormChange}
              disabled={isDisable}
              type="date"
              placeholder="Valid Until"
            />
          </Form.Field>
        </Form.Group>

        {/* <Form.Field>
          <label>Skills</label>
          <input
            name="skills"
            value={info.skills}
            onChange={handleFormChange}
            placeholder="Required Skills"
          />
        </Form.Field> */}

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
            defaultValue={info.category}
            options={categoryOptions}
          />
        </Form.Field>

        <Form.Field>
          <label>Upload your logo</label>
          <UploadLogo info={info} setInfo={setInfo} />
        </Form.Field>

        <Form.Field
          control={TextareaAutosize}
          name="description"
          label="Description"
          placeholder="Enter the Desciption of the project"
          onChange={handleFormChange}
          value={info.description}
        ></Form.Field>

        <Button positive type="submit">
          {state ? "Update" : "Submit"}
        </Button>
        <Button onClick={handleFormCancel} type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};
export default CreateProject;
