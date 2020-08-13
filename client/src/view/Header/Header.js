import { Container, Menu } from "semantic-ui-react";
import React, { useEffect, useState, Fragment, useContext } from "react";
import useReactRouter from "use-react-router";
import Axios from "axios";
import LogedInMenu from "./Menus/LogedInMenu";
import LogedOutMenu from "./Menus/LogedOutMenu";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";

/**
 * @author @binjiasata
 * @description This is the navbar, contains PDC icon, project list button,
 *              login menu or logout menu for now.
 *
 */
const Header = (props) => {
  const { history } = useReactRouter();
  const [activeItem, setActiveItem] = useState("");

  const { userInfo, setUserInfo } = useContext(UserContext);

  // path config http://localhost:8080/
  let path = config();

  // Use google login
  const handleLogin = () => {
    //window.open(path + "auth/login", "_self");
    history.push("/signin");
  };

  const handleLogout = () => {
    window.open(path + "auth/logout", "_self");
  };

  const handleHome = (e, { name }) => {
    history.push("/");
    setActiveItem(name);
  };

  const handleOurTeam = (e, { name }) => {
    history.push("/OurTeam");
    setActiveItem(name);
  };
  const handleEvents = (e, { name }) => {
    history.push("/events");
    setActiveItem(name);
  };

  const handleStudent = (e, { name }) => {
    history.push("/student");
    setActiveItem(name);
  };

  const handlehirestudent = (e, { name }) => {
    history.push("/hirestudent");
    setActiveItem(name);
  };

  const handleAlumni = (e, { name }) => {
    history.push("/alumni");
    setActiveItem(name);
  };

  const handleCovid19 = (e, { name }) => {
    history.push("/covid");
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
    Axios.get(path + "auth/login/success", {
      withCredentials: true,
    })
      .then((res) => {
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
    <Fragment color="blue">
      <Menu fixed="top" inverted color="blue">
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
          {!userInfo.authenticated ||
          (userInfo.user && (userInfo.user.company || userInfo.user.admin)) ? (
            <Menu.Item name="hirestudent"
            active={activeItem === "hirestudent"}
            onClick={handlehirestudent}>Hire Students</Menu.Item>
          ) : (
            ""
          )}

          {!userInfo.authenticated ||
          (userInfo.user && !userInfo.user.company) ? (
            <Menu.Item name="Student"
            active={activeItem === "Student"}
            onClick={handleStudent}>For Students</Menu.Item>
          ) : (
            ""
          )}
          <Menu.Item name="Alumni"
            active={activeItem === "Alumni"}
            onClick={handleAlumni}>For Alumni</Menu.Item>
          <Menu.Item
            name="Covid19"
            active={activeItem === "Covid19"}
            onClick={handleCovid19}>Updates on COVID-19</Menu.Item>
          <Menu.Item
            name="Events"
            active={activeItem === "Events"}
            onClick={handleEvents}
          >
            Events
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
