import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "./assets/css/style.scss";

import Home from "../pages/home/home";

import Login from "../pages/auth/login/login";
import Register from "../pages/auth/register/Register";
import Profile from "../pages/auth/profile/Profile";
import Find from "../App/Find";
import Activity from "../pages/activity/main"
const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/find" component={Find}></Route>
        <Route path="/activity" component={Activity}/>
      </Switch>
    </main>
  );
};

export default hot(module)(Main);