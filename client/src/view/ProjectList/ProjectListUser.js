import React from "react";
import { List, Image } from "semantic-ui-react";

const ProjectListUser = (props) => {
  const { user } = props;

  return (
    <List.Item>
      <Image as="a" size="mini" circular src={user.photoURL} />
    </List.Item>
  );
};

export default ProjectListUser;
