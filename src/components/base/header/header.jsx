import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "./assets/css/style.scss";

const Header = ({token}) => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear('access_token');
    history.push('/');
    location.reload();
  }

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        PROJECT
      </Link>
      <ul className="header_nav">
        <Link to="/notice" className="nav-itm">공지</Link>
        <Link to="/project" className="nav-itm">활동</Link>
        <Link to="/recruitment" className="nav-itm">모집</Link>
        {
          token?.length > 0 ?
            <span style={{cursor: "pointer"}} onClick={logout} className="nav-itm">로그아웃</span>
          :
           <Link to="/login" className="nav-itm">로그인</Link>
        }
      </ul>
    </header>
  );
};

export default hot(module)(Header);
