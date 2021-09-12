import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './scss/NoticeDetail.scss';

import testImg from '../noticemain/assets/noticeImage.png';


export default function NoticeDetail({location}) {

  let data = location.state;

  return(
    <div className="container">

      <div className="imageContainer">
        <img src={testImg}/>
      </div>

      <div className="TextContainer">
        <h1>{data.title}</h1>
        <div>{data.content}</div>
        <div>{data.creator}</div>
        <div>{data.date}</div>
        

      </div>
      
          
    </div>
  );
}