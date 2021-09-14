import React, { useState, useEffect } from 'react';
import { hot } from "react-hot-loader";
import { Link, Route, Switch } from 'react-router-dom';
import '../scss/NoticeBox.scss'

import NoticeDetail from '../../detail/NoticeDetail';



export default function NoticeBox({content, match}) {

  return(
    <Link to={{ pathname: `${match.url}/${content.id}`, state: content }} className="linkStyle">
    <li className="listStyle" style={{backgroundColor:content.backPhoto}}>
      
      <div>
        <div>
          <div className="noticeText">{content.title}</div>
          <div className="noticeText" >작성자: {content.creator}</div>
          <div className="noticeText" >view: 0</div>
          <div className="noticeText">{content.date}</div>
        </div>
      </div>
      
      <Switch>
        <Route path={`${match.url}/:id`} component={NoticeDetail}/>
      </Switch>
    </li>
    </Link>
  );
  
}