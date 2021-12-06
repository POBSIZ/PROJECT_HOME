import React, { useState, useEffect } from 'react';
import { hot } from "react-hot-loader";
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import './scss/NoticePage.scss';
import axios from 'axios';
import speaker from '../noticemain/assets/speaker.png';

import NoticeBox from './components/NoticeBox';
import NoticeCreate from '../create/NoticeCreate';

const reqUrl = "http://3.35.43.53";

function NoticePage() {

  const match = useLocation();

  const token = localStorage?.getItem('access_token');

  const [notice, setData] = useState([]);
  const [userdata, setUserData] = useState([]);


  const getNoticeAPI = () => {
    const url = `${reqUrl}/api/v1/board/1`;

    axios.get(url)
    .then((res) => {
      setData(res.data);
      console.log(res.data)
    })
    .catch(function(err) {
        console.log(err);
    })
  }

  const getUserData = () => {
    axios.get(`${reqUrl}/api/v1/users/me/`,  {
      headers:{
        Authorization: `jwt ${token}`,
        'Content-Type': 'application/json'
        },
    })
    .then((res) => {
      setUserData(res.data);
    })
    .catch(function(err) {
        console.log(err);
    })
  }


  useEffect(() => {
    getNoticeAPI();	
    getUserData();
  },[])

 
  return(
    <div className="total_container">
      <div className="nHeader_container">
        <div className="title_container">
          <h1>공지 <span className='emoji'>📢</span></h1>
          <div>PROJECT 공지입니다.</div>
        </div>

        <div className="add_text">
          { userdata.is_superuser == true ? 
            <span><Link to={`${match.pathname}/create`}>추가</Link></span>
          :null}
        </div>
      </div >

      <div className="list_container">
        {notice.map((c, i)=> {
          return(<NoticeBox key={i} content={c} match={match}/>)
        })}
      </div>

      <Routes>
        <Route path={`${match.pathname}/create`} elements={<NoticeCreate/>} />
      </Routes>
    
    </div>
  );
}

export default hot(module)(NoticePage);

