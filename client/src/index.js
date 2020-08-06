import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { UserProvider } from "./common/context/UserProvider";
import EventsProvider from "./common/context/EventContext"

ReactDOM.render(
  <EventsProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </EventsProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
