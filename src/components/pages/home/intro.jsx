import React from "react";
import { hot } from "react-hot-loader";
import Contact from "./contact";
import { Link, Route, BrowserRouter } from "react-router-dom";

import "./assets/css/intro.scss";

const Intro = () => {
  return (
    <section className="home_intro">

      <div className="title">
        <h1>PROJECT는? 👇</h1>
        <p>
          부산 연합 소프트웨어 동아리 [PROJECT] 는 2020년 12월 창설
          부산에 거주하는 IT에 관심이 있는 다양한 사람들이 모여
          네트워크 인프라 구축 및 다양한 프로젝트를 만들어가는 연합 동아리 입니다.
        </p>
      </div>

      <div className="infoSection info-count">
        <div className="info_right">

            <li className="count-itm">
              <span>누적 활동 멤버</span>
              <h3>51명</h3>
            </li>

            <li className="count-itm">
              <span>현재 활동 멤버</span>
              <h3>51명</h3>
            </li>

            <li className="count-itm">
              <span>누적 진행 프로젝트</span>
              <h3>5개</h3>
            </li>

            <li className="count-itm">
              <span>현재 진행 프로젝트</span>
              <h3>10개</h3>
            </li>

        </div>

        <div className="info-line">
          <div className="line-start elipse"></div>
          <div className="line-main"></div>
          <div className="line-end elipse"></div>
        </div>
        
        <div className="info_left"></div>
      </div>

    </section>
  );
};

export default hot(module)(Intro);
