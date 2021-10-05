import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, BrowserRouter } from "react-router-dom";

import "./assets/css/about.scss";

import Logo from "./assets/img/project.png";

const About = () => {
  return (
    <section className="home_about">
      <div className="about__main">
        <span className="about__main__name">PROJECT</span>
        <span className="about__main__desc">부산 연합 소프트웨어 동아리</span>
      </div>
      {/*<div
        className="home_about-logo"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>*/}
      <div></div>
      <span className="material-icons expend_more">expand_more</span>
    </section>
  );
};

export default hot(module)(About);
