import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, BrowserRouter, withRouter } from "react-router-dom";

import "./assets/css/Auth.scss";

function AuthWrapper(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

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
          <Link to="/Find">아이디/비밀번호 찾기</Link>
          <Link to="/Register">회원가입</Link>
        </div>
      </form>

      <div></div>
    </div>
  );
}

export default withRouter(AuthWrapper);
