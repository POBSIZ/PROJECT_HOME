import React from "react";
import { hot } from "react-hot-loader";
import Contact from "./contact";
import { Link, Route, BrowserRouter } from "react-router-dom";

import "./assets/css/intro.scss";

const Intro = () => {
  return (
    <section className="home_intro">

      <div className="title">
        <h1>PROJECTλ? <span className='emoji'>π</span></h1>
        <p>
          λΆμ° μ°ν© μννΈμ¨μ΄ λμλ¦¬ [PROJECT] λ 2020λ 12μ μ°½μ€
          λΆμ°μ κ±°μ£Όνλ ITμ κ΄μ¬μ΄ μλ λ€μν μ¬λλ€μ΄ λͺ¨μ¬
          λ€νΈμν¬ μΈνλΌ κ΅¬μΆ λ° λ€μν νλ‘μ νΈλ₯Ό λ§λ€μ΄κ°λ μ°ν© λμλ¦¬ μλλ€.
        </p>
      </div>

      <div className="infoSection">

        <div className="center-line"></div>

        <div className="info-count">
          <div className="info_right">
            <li className="count-itm">
              <span>λμ  νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>λμ  μ§ν νλ‘μ νΈ</span>
              <h3>5κ°</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ μ§ν νλ‘μ νΈ</span>
              <h3>10κ°</h3>
            </li>
          </div>

          <div className="info-line"></div>

          <div className="info_left">
            <li className="count-itm">
              <span>λμ  νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>λμ  μ§ν νλ‘μ νΈ</span>
              <h3>5κ°</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ μ§ν νλ‘μ νΈ</span>
              <h3>10κ°</h3>
            </li>
          </div>
        </div>

        <div className="info-count">
          <div className="info_right">
            <li className="count-itm">
              <span>λμ  νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>λμ  μ§ν νλ‘μ νΈ</span>
              <h3>5κ°</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ μ§ν νλ‘μ νΈ</span>
              <h3>10κ°</h3>
            </li>
          </div>

          <div className="info-line"></div>

          <div className="info_left">
            <li className="count-itm">
              <span>λμ  νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>λμ  μ§ν νλ‘μ νΈ</span>
              <h3>5κ°</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ μ§ν νλ‘μ νΈ</span>
              <h3>10κ°</h3>
            </li>
          </div>
        </div>

        <div className="info-count">
          <div className="info_right">
            <li className="count-itm">
              <span>λμ  νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>λμ  μ§ν νλ‘μ νΈ</span>
              <h3>5κ°</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ μ§ν νλ‘μ νΈ</span>
              <h3>10κ°</h3>
            </li>
          </div>

          <div className="info-line"></div>

          <div className="info_left">
            <li className="count-itm">
              <span>λμ  νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ νλ λ©€λ²</span>
              <h3>51λͺ</h3>
            </li>

            <li className="count-itm">
              <span>λμ  μ§ν νλ‘μ νΈ</span>
              <h3>5κ°</h3>
            </li>

            <li className="count-itm">
              <span>νμ¬ μ§ν νλ‘μ νΈ</span>
              <h3>10κ°</h3>
            </li>
          </div>
        </div>

      </div>


    </section>
  );
};

export default hot(module)(Intro);
