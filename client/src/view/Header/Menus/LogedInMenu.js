import React, { Fragment, useContext } from "react";
import useReactRouter from "use-react-router";
import { Image, Menu, Dropdown } from "semantic-ui-react";
import { UserContext } from "../../../common/context/UserProvider";

/**
 * @author @binjiasata
 * @description After user login, this menu will be shown in Header.
 */
const LogedInMenu = ({ logOut, username, userPicture }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { history } = useReactRouter();

  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={userPicture} />
      <Dropdown pointing="top left" text={username}>
        {/* if a user is admin, show create project button */}
        <Dropdown.Menu>
          {userInfo.user && (userInfo.user.admin || userInfo.user.company) && (
            <Fragment>
              <Dropdown.Item
                onClick={() => {
                  history.push("/create-event");
                }}
                text="Post events"
                icon="plus"
              />
              <Dropdown.Item
                onClick={() => {
                  history.push("/create-project");
                }}
                text="Create Project"
                icon="plus"
              />
              <Dropdown.Item
                onClick={() => {
                  history.push("/download-user-list");
                }}
                text="Download User Information"
                icon="download"
              >
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push("/company-dashboard");
                }}
                text="Dashboard"
                icon="dashboard"
              />
            </Fragment>
          )}

          <Dropdown.Item onClick={logOut} text="Log Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default LogedInMenu;
