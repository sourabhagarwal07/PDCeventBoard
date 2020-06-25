import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import CreateProject from "./view/CreateProject";
import Test from "./view/Test/test";

export const history = createBrowserHistory();

const Routers = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/test" component={Test} />
        <Route exact path="/createproject" component={CreateProject} />
      </Switch>
    </Router>
  );
};

export default Routers;
