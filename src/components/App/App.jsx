import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, Route, BrowserRouter, Router } from "react-router-dom";

import AuthWrapper from "../pages/auth/login/login";
import Register from "../pages/auth/register/Register";
import Profile from "../pages/auth/profile/Profile";
import Find from "./Find";

import Header from "../base/header/header";
import Main from "../main/main";
import Footer from "../base/footer/footer";

const App = () => {
  return (
    <>
      <Header>
        <Route exact path="./Auth" component={AuthWrapper} />
        <Route exact path="./Register" component={Register} />
        <Route exact path="./Profile" component={Profile} />
        <Route exact path="./Find" component={Find} />
      </Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default hot(module)(App);
