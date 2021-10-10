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

        <div className="circle-wrapper">
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
        </div>

        <div className="about__main-logo">
          <span className="logo-name">PROJECT</span>
          <span className="logo-desc">부산 연합 소프트웨어 동아리</span>
        </div>

      </div>

      {/*<div
        className="home_about-logo"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>*/}
      {/* <div className="about__desc">
        <span>프로젝트 동아리 홈페이지</span>
        <div></div>
        <p>
          부산 연합 소프트웨어 동아리 [PROJECT] 홈페이지에 오신것을
          환영합니다! IT에 관심많은 부산 청년들이 만들어낸 다양한
          결과물을 [PROJECT] 홈페이지에서 즐기세요. 
          부산 대표 IT 네트워크 인프라를 구축하기 위해
          [PROEJCT]는 움직입니다.
        </p>
      </div> */}
      {/* <Contact></Contact> */}
      <span className="material-icons expend_more">expand_more</span>
    </section>
  );
};

export default hot(module)(About);
