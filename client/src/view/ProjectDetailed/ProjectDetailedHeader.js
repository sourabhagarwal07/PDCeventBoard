import React, { useContext, useState } from "react";
import {
  Segment,
  Image,
  Item,
  Header,
  Button,
  Modal,
  Icon,
} from "semantic-ui-react";
import { UserContext } from "../../common/context/UserProvider";
import Axios from "axios";
import useReactRouter from "use-react-router";

/**
 * @author @binjiasata
 * @description Project header component included title, hostby,
 *              manage project and delete project button.
 */

const ProjectDetailedHeader = ({ id, path, project, props }) => {
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
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);

  // set isDelete to true, this will remove the project from project list
  const handleDelete = () => {
    Axios.post(path + "project/delete/" + id, {
      isDeleted: true,
    }).then((res) => console.log(res));
    setModalOpen(false);
    history.push("/project-list");
  };

  const handleManage = () => {
    let path = {
      pathname: "/project/manage/" + id,
      state: project,
    };
    history.push(path);
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

      {userInfo.user && (userInfo.user.company || userInfo.user.admin) ? (
        <Segment attached="bottom">
          <Button color="orange" onClick={handleManage}>
            Manage Project
          </Button>
          <Modal
            size="tiny"
            closeIcon
            open={modalOpen}
            trigger={
              <Button floated="right" color="red">
                Delete Project
              </Button>
            }
            onClose={() => setModalOpen(false)}
            onOpen={() => setModalOpen(true)}
          >
            <Header icon="archive" content="Delete The Project" />
            <Modal.Content>
              <p>
                <strong>Do you want to delete this project?</strong>
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => setModalOpen(false)}>
                <Icon name="remove" /> No
              </Button>
              <Button color="green" onClick={handleDelete}>
                <Icon name="checkmark" /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Segment>
      ) : null}
    </Segment.Group>
  );
};

export default ProjectDetailedHeader;
