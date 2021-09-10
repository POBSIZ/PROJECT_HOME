import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import AuthWrapper from "./Auth";
import Register from "./Register";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={AuthWrapper} />
      <Route path="/Register" component={Register} />
      <Route path="/Profile" component={Profile} />
    </BrowserRouter>
  );
}

export default hot(module)(App);
