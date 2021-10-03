import React from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import "./assets/css/faq.scss";

function faq({ question, answer }) {
  return (
    <div className="home_message">

      <div className="message-row--Q">
        <span>Q</span>
        <div className="message__info">
          <p className="message__bubble">
            IT 비전공자도 지원가능한가요?
          </p>
        </div>
      </div>
      <div className="message-row--A">
        <div className="message__info">
          <p className="message__bubble">
            네 가능합니다! IT관련 기술뿐만 아니라 다양한 전공 분야를 활용하여 프로젝트에 참여할수도 있습니다.
          </p>
        </div>
        <span>A</span>
      </div>

      <div className="message-row--Q">
        <span>Q</span>
        <div className="message__info">
          <p className="message__bubble">
            활동기간은 어떻게 될까요?
          </p>
        </div>
      </div>
      <div className="message-row--A">
        <div className="message__info">
          <p className="message__bubble">
            1년 동안 PROJECT 활동에 참여하시고 1년후에는 PROJECT 커뮤니티 방에서 다양한 소식을 접할수있습니다.
          </p>
        </div>
        <span>A</span>
      </div>

      <div className="message-row--Q">
        <span>Q</span>
        <div className="message__info">
          <p className="message__bubble">
            어떤 활동을 하나요?
          </p>
        </div>
      </div>
      <div className="message-row--A">
        <div className="message__info">
          <p className="message__bubble">
            자유로운 기획을 통해 다양한 프로젝트를 구현하며 많은 공모전에도 참가하고있습니다.
          </p>
        </div>
        <span>A</span>
      </div>

      <div className="message-row--Q">
        <span>Q</span>
        <div className="message__info">
          <p className="message__bubble">
            인원수는 어떻게 되나요?
          </p>
        </div>
      </div>
      <div className="message-row--A">
        <div className="message__info">
          <p className="message__bubble">
            50명 정도가 활동인원입니다.
          </p>
        </div>
        <span>A</span>
      </div>

      <div className="message-row--Q">
        <span>Q</span>
        <div className="message__info">
          <p className="message__bubble">
          활동은 어디서 하나요?
          </p>
        </div>
      </div>
      <div className="message-row--A">
        <div className="message__info">
          <p className="message__bubble">
            PROJECT 사무실(남구 전포대로 77번길 39-2)에서 다양한 프로젝트를 진행하고있습니다.
          </p>
        </div>
        <span>A</span>
      </div>

    </div>
  );
}

export default hot(module)(faq);
