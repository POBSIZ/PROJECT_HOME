import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, BrowserRouter } from "react-router-dom";

import "./assets/css/style.scss";

function Login() {
  //SNS 연동은 Client ID 발급 받으면 생성 예정
  return (
    <div className="container">
      <header className="welcom-header">
        <h1>Welcom to PROJECT</h1>
        <p>계정을 가지고 있다면 이메일로 로그인 해주세요 :)</p>
      </header>

      <form id="login-form">
        onSubmit={onSubmitHandler}
        <input name="id" type="email" placeholder="이메일을 입력해주세요" />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <input type="submit" value="Log In" />
        <div className="help-login">
          <a href="#">아이디/비밀번호 찾기</a>
          <Link to="/register">회원가입</Link>
        </div>
      </form>

      <div></div>
    </div>
  );
}

export default hot(module)(Login);
