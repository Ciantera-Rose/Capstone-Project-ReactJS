import React from "react";
import ReactDOM from "react-dom";
import "../src/style/Main.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0 from "../src/user/auth/Auth0";

ReactDOM.render(
  <Router>
    <Auth0>
      <App />
    </Auth0>
  </Router>,
  document.getElementById("root")
);
