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

      <div className="about__main">
        <div className="about__main-logo">
          <span className="logo-name">PROJECT</span>
          <span className="logo-desc">부산 연합 소프트웨어 동아리</span>
        </div>

        <div className="circle-wrapper">
          <img src={circle} className="circle"/>
          <img src={circle} className="circle"/>
          <img src={circle} className="circle"/>
          <img src={circle} className="circle"/>
          <img src={circle} className="circle"/>
        </div>

      </div>

      {/*<div
        className="home_about-logo"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>*/}
      <div className="about__desc">
        <span>프로젝트 동아리 홈페이지</span>
        <div></div>
        <p>
          인간은 듣기만 구하기 붙잡아 위하여 이것이다. 얼마나 것이다.
          보라, 있으며, 인간에 기쁘며, 이상 무엇을 행복스럽고 약동하다.
          많이 싹이 얼음이 유소년에게서 살 것은 주는 능히 피다.
          우는 하는 품고 커다란 품으며, 있는가?
          풀이 청춘에서만 대고, 황금시대를 운다.
          있는 꾸며 뜨거운지라, 청춘의 쓸쓸하랴?
          너의 미인을 노년에게서 바이며, 같이, 속잎나고, 그리하였는가?
        </p>
      </div>
      {/* <Contact></Contact> */}
      <span className="material-icons expend_more">expand_more</span>
    </section>
  );
};

export default hot(module)(About);
