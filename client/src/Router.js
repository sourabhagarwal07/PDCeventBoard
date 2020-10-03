import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import CreateProject from "./view/CreateProject/CreateProject";
import Home from "./view/Home/Home";
import Student from "./view/Student/Student";
import CreateForm from "./view/Student/CreateForm";
import Fswep from "./view/Student/Fswep";
import StudentForm from "./view/Student/StudentForm";
import ResumeGuidelines from "./view/Student/ResumeGuidelines";
import GNG5299 from "./view/Student/GNG5299";
import HireStudent from "./view/HireStudent/HireStudent";
import Alumni from "./view/Alumni/Alumni";
import Covid19 from "./view/Covid19/Covid19";
import OurTeam from "./view/OurTeam/OurTeam";
import Feedback from "./view/Feedback/Feedback";
import Header from "./view/Header/Header";
import Footer from "./view/Footer/Footer";
import Signin from "./view/Signin/Signin";
import ProjectListInterface from "./view/ProjectList/ProjectListInterface";
import ProjectDeatiledPage from "./view/ProjectDetailed/ProjectDeatiledPage";
import Events from "./view/Events/Events";
import CreateEvent from './view/Events/createEvent';
import CreateTicket from './view/Events/createTicket';
import UploadLogo from './view/Events/logoUpload';

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
            <Route  exact path="/student" component={Student}/>
            <Route  exact path="/create-form" component={CreateForm}/>
            <Route  exact path="/fswep" component={Fswep}/>
            <Route  exact path="/student-form" component={StudentForm}/>
            <Route  exact path="/resume-guidelines" component={ResumeGuidelines}/>
            <Route  exact path="/useful-links" component={GNG5299}/>
            <Route exact path="/hirestudent" component={HireStudent} />
            <Route exact path="/alumni" component={Alumni} />
            <Route exact path="/covid" component={Covid19}/>
            <Route exact path="/upload" component={UploadLogo} />
            <Route exact path="/feedback" component={Feedback} />
            
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
            <Route
              path="/company-dashboard"
              component={CompanyDashboard}
            />
            <Route
              exact
              path="/create-event"
              component={CreateEvent}
            />
            <Route
              exact
              path="/create-ticket"
              component={CreateTicket}
            />
          </Container>
        </Fragment>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default Routers;
