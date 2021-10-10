import React from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./assets/css/contact.scss";

function Contact() {
  return (
    <div className="home_contact">
      <img
        className="contact__insta"
        onClick={() =>
          window.open("https://www.instagram.com/project_busan/", "_blank")
        }
        src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
      />

      <img
        className="contact__kakao"
        onClick={() => window.open("https://pf.kakao.com/_TCZns", "_blank")}
        src="https://www.kakaocorp.com/page/favicon.ico"
      />

      <img
        className="contact__email"
        src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_32dp.png"
      />
    </div>
  );
}

export default hot(module)(Contact);
