import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "./assets/css/style.scss";

import Home from "../pages/home/home";

import Login from "../pages/auth/login/login";
import Register from "../pages/auth/register/Register";
import Profile from "../pages/auth/profile/Profile";
import Find from "../pages/auth/find/Find";


import Activity from '../pages/activity/main'
import NoticePage from '../pages/notice/noticemain/NoticePage';
import NoticeDetail from '../pages/notice/detail/NoticeDetail';
import NoticeCreate from '../pages/notice/create/NoticeCreate';

import Test from "../pages/test/test";

import MbtiResult from "../pages/deti/mbtiResult";
import MbtiHome from "../pages/deti/mbtiHome";
import Mbti from "../pages/deti/mbti";
import Preq from "../pages/deti/preq";

import Survey_main from "../pages/survey/survey_main";
import Survey from "../pages/survey/survey";
import SurveyCreate from '../pages/survey/survey_create';

import Log from "../pages/log/log";


const Main = () => {
  const token = localStorage?.getItem('access_token');
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        
        <Route path="/activity" element={<Activity/>}></Route>
        <Route path="/find" element={<Find/>}></Route>
        <Route path="/notice" element={<NoticePage/>} />
        <Route path="/notice/create" element={<NoticeCreate/>} />
        <Route path="/notice/:id" element={<NoticeDetail/>} />

        <Route path="/test" element={<Test/>} />

        <Route path="/survey/main" element={<Survey_main/>} />
        <Route path="/survey" element={<Survey/>} />
        <Route path="/survey/create" element={<SurveyCreate/>} />

        <Route path="/mbti" element={<MbtiHome/>} />
        <Route path="/mbti/preq" element={<Preq/>} />
        <Route path="/mbti/question" element={<Mbti/>} />
        <Route path="/mbti/result" element={<MbtiResult/>} />

        <Route path="/log" element={<Log/>} />

      </Routes>
    </main>             
  )
}
export default hot(module)(Main);