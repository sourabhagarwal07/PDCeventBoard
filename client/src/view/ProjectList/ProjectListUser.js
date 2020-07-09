import React from "react";
import { List, Image } from "semantic-ui-react";

/**
 * @author @binjiasata
 * @description This is project list user component.
 */
const ProjectListUser = ({ user }) => {
  return (
    <List.Item>
      <Image as="a" size="mini" circular src={user.photoURL} />
    </List.Item>
  );
};

export default ProjectListUser;
