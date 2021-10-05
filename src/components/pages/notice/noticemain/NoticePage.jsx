import React, { useState, useEffect } from 'react';
import { hot } from "react-hot-loader";
import { Route, Link, Switch } from 'react-router-dom';
import './scss/NoticePage.scss';
import axios from 'axios';
import speaker from '../noticemain/assets/speaker.png';

import NoticeBox from './components/NoticeBox';
import NoticeCreate from '../create/NoticeCreate';

function NoticePage({match}) {

  const token = localStorage?.getItem('access_token');
  console.log("토큰이 나오나?", token)

  const [notice, setData] = useState([]);


  const getNoticeAPI = () => {
    const url = "http://3.35.43.53/api/v1/board/1";

    axios.get(url)
    .then((res) => {
      setData(res.data);
      console.log(res.data)
    })
    .catch(function(error) {
        console.log("실패");
    })
  }


  useEffect(() => {
    getNoticeAPI()	

  },[])

 
  return(
    <div className="total_container">
      <div className="nHeader_container">
        <div className="title_container">
          <h1>공지 📢</h1>
          <div>PROJECT 공지입니다.</div>
        </div>

        <div className="add_text">
          {token == undefined ? 
            <div></div>
          :
            <span><Link to={`${match.url}/create`}>추가</Link></span>
          }
        </div>
      </div >

      <div className="list_container">
        {notice.map((c, i)=> {
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

