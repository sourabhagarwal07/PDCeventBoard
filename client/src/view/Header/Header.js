import { Button, Container, Menu, Image } from "semantic-ui-react";
import React, { useEffect, useState, Fragment } from "react";
import useReactRouter from "use-react-router";
import axios from "axios";
import LogedInMenu from "./Menus/LogedInMenu";
import LogedOutMenu from "./Menus/LogedOutMenu";
import { withRouter } from "react-router-dom";

/**
 * @author @binjiasata
 * @description This is the navbar, contains PDC icon, project list button,
 *              login menu or logout menu for now.
 *
 */
const Header = (props) => {
  const { history } = useReactRouter();
  const [activeItem, setActiveItem] = useState("");

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

  const handleHome = (e, { name }) => {
    history.push("/");
    setActiveItem(name);
  };

  const handleOurTeam = (e, { name }) => {
    history.push("/OurTeam");
    setActiveItem(name);
  };

  const handleProjectList = (e, { name }) => {
    if (userInfo.authenticated) {
      history.push("/project-list");
      setActiveItem(name);
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
        // console.log(res);
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
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            as="a"
            onClick={handleHome}
            header
          >
            Professional Development Club
          </Menu.Item>
          <Menu.Item
            name="OurTeam"
            active={activeItem === "OurTeam"}
            onClick={handleOurTeam}
          >
            Our Team
          </Menu.Item>
          <Menu.Item as="a" >
            Hire Students
          </Menu.Item>
          <Menu.Item as="a" >
            For Students
          </Menu.Item>
          <Menu.Item
            name="projectList"
            active={activeItem === "projectList"}
            onClick={handleProjectList}
          >
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