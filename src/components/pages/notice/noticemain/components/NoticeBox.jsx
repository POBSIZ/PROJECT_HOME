import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { hot } from "react-hot-loader";
import { Link, Route, Switch } from 'react-router-dom';
import '../scss/NoticeBox.scss'
import NoticeDetail from '../../detail/NoticeDetail';

import eye from '../assets/eye.png'



export default function NoticeBox({content, match}) {

  const file = 'http://3.35.43.53' + `${content.thumbnail}`
  let create_date = (content.created_date).substring(0,10);

  const token = localStorage?.getItem('access_token');


  return(
    <Link to={{ pathname: `${match.url}/${content.id}`, state: content }}>
      <div className="noticeBox_container">
        
        <div className="image_container">
          <img className="img_style" src={file} />
        </div>

        <div className="text_container">
          <div className="little_text">작성자: {content.creator}</div>
          <div className="title_text">{content.title}</div>
          <div className="content_text">{content.content}</div>
          <div className="little_text">{create_date}</div>
        </div>

        <div className="view_box">

          <span className="view_text">조회수: {content.hits}</span>
        </div>
 
    
        <Switch>
          <Route path={`${match.url}/:id`} component={NoticeDetail}/>
        </Switch>
    </div>
    </Link>
  );
  
}