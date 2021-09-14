import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "./assets/css/style.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        PROJECT
      </Link>
      <ul className="header_nav">
        <Link to="/notice" className="nav-itm">
          공지
        </Link>
        <Link to="/board" className="nav-itm">
          게시판
        </Link>
        <Link to="/project" className="nav-itm">
          PROJECT
        </Link>
        <Link to="/recruitment" className="nav-itm">
          모집
        </Link>
        <Link to="/login" className="nav-itm">
          로그인
        </Link>
      </ul>
    </header>
  );
};

export default hot(module)(Header);
