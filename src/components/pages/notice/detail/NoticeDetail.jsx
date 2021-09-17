import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import './scss/NoticeDetail.scss';


export default function NoticeDetail({location}) {

  const history = useHistory();
  let data = location.state;
  let dataId = data.id

  const thumbnail = 'http://3.35.43.53' + `${data.thumbnail}`
  let create_date = (data.created_date).substring(0,10);

  const token = localStorage?.getItem('access_token');
  
  const config = {
    headers: {"Authorization": `JWT ${token}`}
  }

  const deleteFunc = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      axios.delete(`http://3.35.43.53/api/v1/board/1/post/${dataId}`,
        {
          headers:{
            Authorization: `jwt ${token}`,
            'Content-Type': 'application/json'
          }
        })
      .then((res) => { ()=> {
        alert("삭제되었습니다."); 
        }})
      .catch((err) => {console.log("삭제 실패")})

      history.push('/notice'); 
      location.reload();
      
    } else {
      console.log('삭제 취소');
    }
  }


  return(
    <div className="container">

      <div className="listBack_container">
        <div>=</div>
        <Link to="/notice" className="nav-itm">목록</Link>
      </div>

      <div className="modifyContainer">
        {/* <button >수정</button> */}
        <button onClick={()=>deleteFunc()}>삭제</button>
      </div>
        

      <div className="contentContainer">
        <div className="imageContainer">
          <img src={thumbnail }/>
        </div>

        <div className="textContainer">
          <h1>{data.title}</h1>

          <div>작성자 {data.creator}</div>
          <div>작성일 {create_date}</div>
          
          <div>{data.content}</div>
          <div>파일{data.upload_file}</div>
        </div>

      </div>
      
          
    </div>
  );
}