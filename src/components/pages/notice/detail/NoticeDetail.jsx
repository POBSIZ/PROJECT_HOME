import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './scss/NoticeDetail.scss';

import testImg from '../noticemain/assets/noticeImage.png';


export default function NoticeDetail({location}) {

  let data = location.state;

  return(
    <div className="container">
      <div className="testdiv">

        <div className="imageContainer">
          <img src={testImg}/>
        </div>

        <div className="textContainer">
          <h1>{data.title}</h1>

          
          <div>작성자 {data.creator}</div>
          <div>작성일 {data.date}</div>
          
          <div>{data.content}</div>
        </div>

      </div>
      
          
    </div>
  );
}