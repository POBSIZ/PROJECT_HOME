import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

import "./assets/css/main.scss";

import intro from './assets/img/WAVE.svg'

const MbtiHome = ({ location }) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [])

  return (
    <article className="deti-intro">

      <section className="intro-title">
        <h1>개발자 적성검사</h1>
        <p>Made By PROJECT</p>
      </section>

      <section className="intro-bg" style={{ backgroundImage: `url(${intro})` }}>
        <div className="intro-rule">
          <h1>RULES</h1>

          <li className="rule-itm">
            <i class="fas fa-stopwatch"></i>
            <span>검사 시간은 10분 내외입니다.</span>
          </li>

          <li className="rule-itm">
            <i class="fas fa-check"></i>
            <span>신중하게 답변해주세요.</span>
          </li>

          <li className="rule-itm">
            <i class="far fa-smile"></i>
            <span>결과는 재미로만 즐겨주세요.</span>
          </li>

          <li className="rule-itm">
            <i class="fas fa-share-alt"></i>
            <span>여러분의 결과를 인스타에 공유해주세요.</span>
          </li>

        </div>
      </section>

      <section className="intro-start">
        <Link to="/mbti/preq" className="deti-start">시작</Link>
      </section>

    </article>
  )

}

export default hot(module)(MbtiHome);