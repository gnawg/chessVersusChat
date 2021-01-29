import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./app";

/* Handle mounting React App, and other wrappers like Redux or possibly React Router */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("react-app")
);
