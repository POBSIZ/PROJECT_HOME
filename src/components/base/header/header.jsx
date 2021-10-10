import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "./assets/css/style.scss";

const FiltHeader = ({ close, logout, token }) => {
    return(
        location.pathname == '/mbti' ? (
            <Link to="/mbti" className="nav-itm" onClick={close}>DETI</Link>
        ) : (
            <>
                <Link to="/mbti" className="nav-itm" onClick={close}>DETI</Link>
                <Link to="/notice" className="nav-itm" onClick={close}>공지</Link>
                <Link to="/activity" className="nav-itm" onClick={close}>활동</Link>
                {token?.length > 0 ? (
                    <span style={{ cursor: "pointer" }} onClick={logout} className="nav-itm">로그아웃</span>
                ) : (
                    <Link to="/login" className="nav-itm" onClick={close}>로그인</Link>
                )}
            </>
        )
    )
}

const Header = ({ token }) => {
    const history = useHistory();

    const [menuStyle, setMenuStyle] = useState({
        top: "",
        backgroundColor: "",
    });

    const logout = () => {
        localStorage.clear("access_token");
        history.push("/");
        location.reload();
        setMenuStyle({ top: "" });
    };

    const menuOpen = () => {
        setMenuStyle({
            top: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.144)",
            opacity: "100%",
        });
    };

    const menuClose = () => {
        setMenuStyle({ top: "" });
    };

    const [navRen, setNavRen] = useState();
    const menuRender = () => {
        setNavRen({...navRen})
    };

    return (
        <header className="header">
            <Link to="/" className="header-logo" onClick={menuRender}>
                PROJECT
            </Link>
            <div className="header_nav-tab" onClick={menuOpen}><span className="material-icons">menu</span></div>
            <ul className="header_nav" style={menuStyle}>
                <div onClick={menuClose} className="nav-itm close">X</div>
                <FiltHeader close={menuClose} logout={logout} token={token}></FiltHeader>
            </ul>
        </header>
    );
};

export default hot(module)(Header);
