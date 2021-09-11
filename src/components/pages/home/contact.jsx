import React from "react";
import PropTypes from "prop-types";
import "./assets/css/contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__insta">
        <img src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png" />
        <span>@project_busan</span>
      </div>
      <div className="contact__kakao">
        <img src="https://www.kakaocorp.com/page/favicon.ico" />
        <span>PROJECT</span>
      </div>
      <div className="contact__email">
        <img src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_32dp.png" />
        <span>project_busan@gmail.com</span>
      </div>
    </div>
  );
}
