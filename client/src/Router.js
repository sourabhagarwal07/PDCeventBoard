import React from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom';
import ProjectList from "./view/ProjectList";
import Test from "./test";

export const history = createBrowserHistory();

const Routers = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/test" component={Test} />
                <Route exact path="/projectlist" component={ProjectList} />
            </Switch>
        </Router>
    )
};

export default Routers;