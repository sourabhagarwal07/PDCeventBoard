import React from "react";
import { Menu, Button } from "semantic-ui-react";

/**
 * @author @binjiasata
 * @description User logout or not login yet, this menu will be shown in Header.
 */
const LogedOutMenu = ({ logIn }) => {
  return (
    <Menu.Item position="right">
      <Button onClick={logIn} basic inverted content="Login" />
    </Menu.Item>
  );
};

export default LogedOutMenu;
