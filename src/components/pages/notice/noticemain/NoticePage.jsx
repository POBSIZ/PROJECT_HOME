import React, { useState, useEffect } from 'react';
import { hot } from "react-hot-loader";
import { Route, Link, Switch } from 'react-router-dom';
import './scss/NoticePage.scss';
import axios from 'axios';

import data from './assets/data.json';

import NoticeBox from './components/NoticeBox';
import NoticeCreate from '../create/NoticeCreate';

function NoticePage({match}) {

  console.log("매치가 뭘까?", match)
  console.log("데이터 받아와?", data)


  return(
    <div>
      <div className="titleContainer">
        <h1 className="titleText">NOTICE</h1>
        <span className="addText"><Link to={`${match.url}/create`}>추가</Link></span>
      </div >

      <div className="listContainer">
          {data.notice.map((c, i)=> {
            console.log("동작하긴하니..")
            return(<NoticeBox key={i} content={c} match={match}/>)
          })}
        
      </div>


      <Switch>
        <Route path={`${match.url}/create`} component={NoticeCreate} />
      </Switch>
    
    </div>
  );
}

export default hot(module)(NoticePage);

