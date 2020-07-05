import { Button, Container, Menu } from "semantic-ui-react";
import React, { useEffect, useState, Fragment } from "react";
import useReactRouter from "use-react-router";
import axios from "axios";

const Header = (props) => {
  const { history } = useReactRouter();

  const [userInfo, setUserInfo] = useState({
    user: {},
    error: null,
    authenticated: false,
  });

  const handleLogin = () => {
    window.open("http://localhost:8080/auth/login", "_self");
  };

  const handleLogout = () => {
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

  useEffect(() => {
    axios
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

  //if user doesn't login, display Login button, or display Sign out
  let button;
  if (userInfo.authenticated) {
    button = (
      <Button onClick={handleLogout} as="a" inverted>
        Sign out
      </Button>
    );
  } else {
    button = (
      <Button onClick={handleLogin} as="a" inverted>
        Login
      </Button>
    );
  }

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
          <Menu.Item position="right">{button}</Menu.Item>
          <Menu.Item>
            {userInfo.authenticated ? "Welcome " + userInfo.user.name : ""}
          </Menu.Item>
        </Container>
      </Menu>
    </Fragment>
  );
};

export default Header;
