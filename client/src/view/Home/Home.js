import React from "react";
import Header from "../Header/Header";
import {Link, NavLink, Switch} from "react-router-dom";
import {Button, Container, Menu} from "semantic-ui-react";
import useReactRouter from "use-react-router";


const Home = () => {
  const {history} = useReactRouter();

  const handleProject = () => {
    console.log(history);
    history.push("/create-project")
  };

  return (
    <React.Fragment>
      <Button onClick={() => handleProject()}>
        project
      </Button>
      <h1>This is Home</h1>
    </React.Fragment>
  )
};

export default Home;