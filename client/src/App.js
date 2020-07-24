import React, { Fragment } from "react";
import Routers from "./Router";
import "semantic-ui-css/semantic.min.css";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./common/utils/ScrollToTop";

const App = () => {
  return (
    <Fragment>
      <HashRouter>
        <ScrollToTop>
          <Routers />
        </ScrollToTop>
      </HashRouter>
    </Fragment>
  );
};

export default App;
