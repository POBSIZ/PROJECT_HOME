import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Routes, useNavigate, useParams, useLocation } from 'react-router-dom';

import { GoogleLogin } from "react-google-login";

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Actions from "../../../../redux/actions";

import "./assets/css/style.scss";


const Login = () => {

  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth)

  const navigate = useNavigate();

  const postLogin = async (e) => {
    e.persist();
    e.preventDefault();
    try{
      const postAuth = await axios({
        method: 'POST',
        url: "v1/auth/login/",
        mode: 'cors',
        data: {
          username: e.target.username.value,
          password: e.target.password.value,
        }
      });
      await dispatch(Actions.auth.login(postAuth.data.access_token))
      navigate(-1);
    }catch(err){
      console.log(err);
    }

  };

  return (
    <div className="container">
      <header className="welcom-header">
        <h1>Welcom to PROJECT</h1>
        <p>계정을 가지고 있다면 이메일로 로그인 해주세요 :)</p>
      </header>

      <form id="login-form" onSubmit={postLogin}>
        <input
          required
          name="username"
          type="id"
          placeholder="ID를 입력해주세요"
        />
        <input
          required
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <input type="submit" value="로그인" />
        <div className="help-login">
          <Link to="/register">회원가입</Link>
        </div>
      </form>
    </div>
  );
};

export default hot(module)(Login);
