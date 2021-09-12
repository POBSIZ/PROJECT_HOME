import React from "react";
import PropTypes from "prop-types";
import "./assets/css/faq.scss";

function faq({ question, answer }) {
  return (
    <div className="message">
      <div className="message-row--Q">
        <span>Q</span>
        <div className="message__info">
          <p className="message__bubble">{question}</p>
        </div>
      </div>
      <div className="message-row--A">
        <div className="message__info">
          <p className="message__bubble">{answer}</p>
        </div>
        <span>A</span>
      </div>
    </div>
  );
}

faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default faq;
