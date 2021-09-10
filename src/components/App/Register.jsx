import React from "react";

import "./assets/css/Register.scss";

function Register() {
  // 아이디 중복확인 비밀번호 중복체크: 이후 추가 예정
  // 자동 중복확인? or alert 사용
  return (
    <div className="register-form">
      <header className="register-form__header">
        <h1>회원가입</h1>
      </header>

      <form className="register-form__container">
        <div>
          <span>아이디</span>
          <input required name="ID" type="text" placeholder="id" />
        </div>
        <div>
          <span>이름</span>
          <input required name="name" type="email" placeholder="이름" />
        </div>
        <div>
          <span>비밀번호</span>
          <input
            required
            name=""
            type="pw1"
            placeholder="비밀번호"
            minLength="8"
          />
        </div>
        <div>
          <span>비밀번호 확인</span>
          <input required name="" type="pw2" placeholder="비밀번호 확인" />
        </div>
        <div>
          <span>이메일</span>
          <input required name="" type="email" placeholder="e-mail" />
        </div>
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
}

export default Register;
