import React, { useState } from "react";
import { hot } from "react-hot-loader";

import { useNavigate } from "react-router-dom";

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Actions from "../../../../redux/actions";

import "./assets/css/style.scss";

const Register = () => {

  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.persist();
    e.preventDefault();

    try {
      console.log(
        'username:', e.target.username.value, '\n',
        'password1:', e.target.pwd1.value, '\n',
        'password2:', e.target.pwd2.value, '\n',
        'email:', e.target.email.value, '\n',
      );

      const postAuthSignup = await axios({
        method: "POST",
        mode: "cors",
        url: 'v1/users/me/',
        data: {
          username: e.target.username.value,
          password1: e.target.pwd1.value,
          password2: e.target.pwd2.value,
          email: e.target.email.value,
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          gender: e.target.gender.value,
        },
      });
      console.log(postAuthSignup);

      try {
        const postAuthLogin = await axios({
          method: 'POST',
          url: "v1/auth/login/",
          mode: 'cors',
          data: {
            username: e.target.username.value,
            password: e.target.pwd1.value,
          }
        });
        console.log("access_token", postAuthLogin);
        await dispatch(Actions.auth.signup(postAuthLogin.data.access_token))
        navigate("/");

      } catch (err) { console.log(err); }

    } catch (error) { 
      console.log(error.response); 
    }

  };

  // 아이디 중복확인 비밀번호 중복체크: 이후 추가 예정
  // 자동 중복확인? or alert 사용
  return (
    <section className="register-form">
      <article className="register-form_header">
        <h1>회원가입</h1>
      </article>

      <form className="register-form_container" onSubmit={signup}>
        
        <label className='form-name'>
          <span>이름</span>
          <div>
            <input required name="last_name" type="text" placeholder="성" />
            <input required name="first_name" type="text" placeholder="이름" />
          </div>
        </label>
        
        <label className='form-gender'>
          <span>성별</span>
          <select name="gender" id="">
            <option value="">NULL</option>
            <option value="M">남자</option>
            <option value="F">여자</option>
          </select>
        </label>
        
        <label>
          <span>아이디</span>
          <input required name="username" type="text" placeholder="id" />
        </label>

        <label>
          <span>비밀번호</span>
          <input
            required
            name="pwd1"
            type="password"
            placeholder="비밀번호"
            minLength="8"
          />
        </label>

        <label>
          <span>비밀번호 확인</span>
          <input
            required
            name="pwd2"
            type="password"
            placeholder="비밀번호 확인"
          />
        </label>

        <label>
          <span>이메일</span>
          <input required name="email" type="email" placeholder="e-mail" />
        </label>

        <input type="submit" value="회원가입" />
      </form>
    </section>
  );
};

export default hot(module)(Register);
