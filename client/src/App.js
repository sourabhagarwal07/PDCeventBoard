import React, { Fragment } from "react";
import Routers from "./Router";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./common/utils/ScrollToTop";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <ScrollToTop>
          <Routers />
        </ScrollToTop>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
