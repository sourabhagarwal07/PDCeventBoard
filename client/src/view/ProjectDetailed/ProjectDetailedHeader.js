import React, { useState } from "react";
import {
  Segment,
  Image,
  Item,
  Header,
  Button,
  Modal,
  Icon,
} from "semantic-ui-react";
import Axios from "axios";
import useReactRouter from "use-react-router";

/**
 * @author @binjiasata
 * @description Project header component included title, hostby,
 *              manage project and delete project button.
 */

const ProjectDetailedHeader = ({
  id,
  path,
  project,
  userInfo,
  appliedStudentsList,
}) => {
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

  const { history } = useReactRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const handleActiveStatus = () => {
    Axios.post(path + "project/delete/" + id, {
      isDeleted: !project.isDeleted,
    });
    setModalOpen(false);
    history.push("/project-detail/" + id);
    //remove this later after fixing bug# try returning data with latest project status changed.
   window.location.reload(false);
  };
  // pass state to Creat Project, state includes Project Details
  const handleManage = () => {
    let path = {
      pathname: "/project/manage/" + id,
      state: project,
    };
    history.push(path);
  };

  const handleApply = () => {
    if (userInfo.authenticated) {
      history.push("/students/apply/" + id);
    } else {
      alert("You need to login first!");
      history.push("/signin");
    }
  };

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
                  content={project.title}
                  style={{ color: "white" }}
                />
                <p>
                  Hosted by <strong>{project.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      {/* For student, only show Apply button. For company and admin, show Manage and Delete button */}
      {userInfo.user &&
      (userInfo.user.company || userInfo.user.admin) &&
      project.user &&
      project.user[0].email === userInfo.user.email ? (
        <Segment attached="bottom" clearing>
          <Button color="orange" onClick={handleManage}>
            Edit Project Details
          </Button>
          <Modal
            size="tiny"
            closeIcon
            open={modalOpen}
            trigger={project.isDeleted == true? (
                  <Button floated="right" color="green" content="Activate"/>
                ) : (
                  <Button floated="right" color="red">
                    Deactivate Project
                  </Button>
                )}
            onClose={() => setModalOpen(false)}
            onOpen={() => setModalOpen(true)}
          >
            <Header icon="archive" content="Change project status" />
            <Modal.Content>
              <p>
                <strong>Are you sure you want to proceed?</strong>
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => setModalOpen(false)}>
                <Icon name="remove" /> No
              </Button>
              <Button color="green" onClick={handleActiveStatus}>
                <Icon name="checkmark" /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Segment>
      ) : userInfo.user && (userInfo.user.company || userInfo.user.admin) ? (
        ""
      ) : (
        <Segment attached="bottom" clearing>
          {/* use email to judge the student applied or not */}
          {userInfo.user &&
          JSON.stringify(appliedStudentsList).indexOf(userInfo.user.email) !==
            -1 ? (
            <Button disabled floated="right" color="orange" content="Applied" />
          ) : (
            <Button floated="right" color="green" onClick={handleApply}>
              Apply
            </Button>
          )}
        </Segment>
      )}
    </Segment.Group>
  );
};

export default ProjectDetailedHeader;
