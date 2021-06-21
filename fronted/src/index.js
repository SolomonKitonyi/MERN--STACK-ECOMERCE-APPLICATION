import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { positions, transitions, Provider as Alertprovider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import store from "./store";
import App from "./App";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <Alertprovider template={AlertTemplate} {...options}>
      <App />
    </Alertprovider>
  </Provider>,
  document.getElementById("root")
);
