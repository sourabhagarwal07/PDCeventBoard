import { Button, Container, Menu } from "semantic-ui-react";
import React, { useEffect, useState, Fragment } from "react";
import useReactRouter from "use-react-router";
import axios from "axios";
import LogedInMenu from "./Menus/LogedInMenu";
import LogedOutMenu from "./Menus/LogedOutMenu";

/**
 * @author @binjiasata
 * @description This is the navbar, contains PDC icon, project list button, 
 *              login menu or logout menu for now.
 * 
 */
const Header = (props) => {
  const { history } = useReactRouter();

  const [userInfo, setUserInfo] = useState({
    user: {},
    error: null,
    authenticated: false,
  });

  // Use google login
  const handleLogin = () => {
    // for deploy
    // window.open("auth/login", "_self");
    window.open("http://localhost:8080/auth/login", "_self");
  };

  const handleLogout = () => {
    // for deploy
    // window.open("/auth/logout", "_self");
    window.open("http://localhost:8080/auth/logout", "_self");
  };

  const handleHome = () => {
    history.push("/");
  };
  
  const handleProjectList = () => {
    if (userInfo.authenticated) {
      history.push("/project-list");
    } else {
      alert("You need to login!");
    }
  };

  // Get logged user info from backend
  useEffect(() => {
    axios
      // for deploy
      // .get("/auth/login/success", {
      .get("http://localhost:8080/auth/login/success", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((data) => {
        setUserInfo({
          ...userInfo,
          user: data.user,
          authenticated: data.authenticated,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Fragment>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" onClick={handleHome} header>
            Professional Development Club
          </Menu.Item>
          <Menu.Item as="a" onClick={handleHome}>
            Home
          </Menu.Item>
          <Menu.Item as="a" onClick={handleProjectList}>
            Project List
          </Menu.Item>
          {userInfo.authenticated ? (
            <LogedInMenu
              logOut={handleLogout}
              username={userInfo.user.name}
              userPicture={userInfo.user.picture}
            />
          ) : (
            <LogedOutMenu logIn={handleLogin} />
          )}
        </Container>
      </Menu>
    </Fragment>
  );
};

export default Header;
