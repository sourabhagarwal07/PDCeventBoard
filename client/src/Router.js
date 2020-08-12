import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import CreateProject from "./view/CreateProject/CreateProject";
import Home from "./view/Home/Home";
import OurTeam from "./view/OurTeam/OurTeam";
import Header from "./view/Header/Header";
import Footer from "./view/Footer/Footer";
import Signin from "./view/Signin/Signin";
import ProjectListInterface from "./view/ProjectList/ProjectListInterface";
import ProjectDeatiledPage from "./view/ProjectDetailed/ProjectDeatiledPage";
import Events from "./view/Events/Events";
import CreateEvent from "./view/Events/createEvent";

import Admin from "./view/Admin/Admin";
import { Container } from "semantic-ui-react";
import CompanyDashboard from "./view/CompanyDashboard/CompanyDashboard";
import ApplyForm from "./view/Students/ApplyForm/ApplyForm";
import StudentAppliedList from "./view/Students/StudentAppliedList/StudentAppliedList";

/**
 * This is routers for the website.
 *
 * Need to solve login authentication, user can input url directly to go to the page.
 */

const Routers = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Fragment>
          <Container className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/OurTeam" component={OurTeam} />
            <Route exact path="/create-project" component={CreateProject} />
            <Route exact path="/project/manage/:id" component={CreateProject} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/students/apply/:id" component={ApplyForm} />
            <Route
              exact
              path="/students/list"
              component={StudentAppliedList}
            />
            <Route
              exact
              path="/project-list"
              component={ProjectListInterface}
            />
            <Route
              exact
              path="/project-detail/:id"
              component={ProjectDeatiledPage}
            />
            <Route exact path="/create-event" component={CreateEvent} />
            <Route path="/company-dashboard" component={CompanyDashboard} />
          </Container>
        </Fragment>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default Routers;
