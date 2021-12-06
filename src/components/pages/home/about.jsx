import React from "react";
import { hot } from "react-hot-loader";
import Contact from "./contact";
import { Link, Route, BrowserRouter } from "react-router-dom";

import "./assets/css/circleAnim.scss";
import "./assets/css/about.scss";

import Logo from './assets/img/project.png';
import Contact from "./contact";

import circle from './assets/img/circle.png'

const About = () => {
  return (
    <section className="home_about">

      <div className="about_main">

        <div className="circle-wrapper">
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
        </div>

        <div className="about_main-logo">
          <span className="logo-name">PROJECT</span>
          <span className="logo-desc">부산 연합 IT 동아리</span>
        </div>

        <div className='about_main-surv'>
          <p>모집기간: 12/13(월) ~ 12/20(월)</p>
          <Link to='/survey/main'>지원하러가기</Link>
        </div>

      </div>

      <span className="material-icons expend_more">expand_more</span>
    </section>
  );
};

export default hot(module)(About);
