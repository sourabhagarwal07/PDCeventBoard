import React, { Fragment } from "react";
import { Image, Menu, Dropdown } from "semantic-ui-react";

/**
 * @author @binjiasata
 * @description After user login, this menu will be shown in Header.
 */
const LogedInMenuLinkedin = ({ logOut, username, userPicture }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={userPicture} />
      <Dropdown pointing="top left" text={username}>
        <Dropdown.Menu>
          <Dropdown.Item text="Post event" icon="plus" />
          <Dropdown.Item text="Create Project" icon="plus" />
          <Dropdown.Item onClick={logOut} text="Log Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default LogedInMenuLinkedin;