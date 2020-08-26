import React, { Fragment } from "react";
import Routers from "./Router";
import "semantic-ui-css/semantic.min.css";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./common/utils/ScrollToTop";
import WindowDimensionsProvider from './common/context/WindowDimensionsProvider'

const App = () => {
  return (
    <WindowDimensionsProvider>
      <Fragment>
        <HashRouter>
          <ScrollToTop>
            <Routers />
          </ScrollToTop>
        </HashRouter>
      </Fragment>
    </WindowDimensionsProvider>
  );
};

export default App;
