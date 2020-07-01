import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import CreateProject from "./view/CreateProject/CreateProject";
import Home from "./view/Home/Home";
import Header from "./view/Header/Header";
import ProjectListInterface from "./view/ProjectList/ProjectListInterface";
import { Container } from "semantic-ui-react";

/**
 * This is routers for the website.
 * 
 * Need to solve login authentication, user can input url directly to go to the page.
 */

const Routers = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          {/*<Route exact path='/' component={Home}/>*/}
          <Container className="main">
            <Route exact path="/create-project" component={CreateProject} />
            <Route
              exact
              path="/project-list"
              component={ProjectListInterface}
            />
          </Container>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routers;
