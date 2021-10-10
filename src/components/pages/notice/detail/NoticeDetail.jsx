import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import { useCookies } from "react-cookie";
import './scss/NoticeDetail.scss';
import download_icon from './assets/download_icon.png';



export default function NoticeDetail({location}) {

  const [files, setFiles] = useState([]);
  const [data, setData] = useState([]);
  const [userdata, setUserData] = useState([]);
  const [image, setImage] = useState('')
  const [cookies, setCookie] = useCookies();

  const history = useHistory();
  let location_data = location.state;
  let dataId = location_data.id

  // console.log("원래 썸네일 주소가 뭐지?", location_data.thumbnail)
  let create_date = (location_data.created_date).substring(0,10);

  const token = localStorage?.getItem('access_token');
  const thumbnail = 'http://3.35.43.53' + `${location_data.thumbnail}`
  

  const getNoticeDetail = () => {
    const url = 'http://3.35.43.53/api/v1/board/1/post/'+`${dataId}`;
    axios.get(url)
    .then((res) => {
      setData(res.data);
      setFiles(res.data.postfile)
      // console.log("새로받은 데이터", res.data)
      // console.log("파일 데이터", res.data.postfile)
    })
    .catch(function(error) {
        console.log(error);
    })
  }


  const getUserData = () => {
    axios.get('http://3.35.43.53/api/v1/users/me',  {
      headers:{
        Authorization: `jwt ${token}`,
        'Content-Type': 'application/json'
        },
    })
    .then((res) => {
      setUserData(res.data);
      // console.log("유저 데이터", res.data)
    })
    .catch(function(error) {
        console.log(error);
    })
  }


  const getCookieValue = (key) => {
    // let cookieKey = key + "="; 
    // let result = "";
    // const cookieArr = document.cookie.split(";");
    
    // for(let i = 0; i < cookieArr.length; i++) {
    //   if(cookieArr[i][0] === " ") {
    //     cookieArr[i] = cookieArr[i].substring(1);
    //   }
      
    //   if(cookieArr[i].indexOf(cookieKey) === 0) {
    //     result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
    //     return result;
    //   }
    // }
    // console.log("받아온 쿠기가 있어?", result)
    // return result;

    // Cookies.get()
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

 
  useEffect(()=> {
    getNoticeDetail();
    getUserData();

  }, [])



  return(
    <div className="detail_container">

      <div className="de_title_container">
        <div className="title_text">{data.title}</div>
      </div>

      <div className="de_text_container">
          <div className="text_box">
            <div className="little_text">작성자 {data.creator}</div>
            <div className="little_text">작성일 {create_date}</div>
          </div>

          <div className="de_hits_box">
            <div className="de_hits_text">조회수: {data.hits}</div> 
          </div>
      </div>
          
      <div className="de_delete_container">
        { userdata.is_superuser == true ? 
          <div className="de_button_box">
            {/* <button>수정</button> */}
            <button className="button_delete" onClick={()=>deleteFunc()}>삭제</button>
            <Link to="/notice" className="button_list">목록</Link>
          </div>
        :
          <div></div>
        }
      </div>
      
      { location_data.thumbnail == "/media/undefined" ?
        <div></div> 
      :
        <div className="de_image_container">
          <img className="imege_style" src={ thumbnail }/>
        </div>
      }  

      <div className="de_content_container">
        <div>{data.content}</div>
      </div>
      
        {
          files.map((c, i)=> {
            const fileLink = `http://3.35.43.53/api/v1/board/file/${c.id}` 
            return(
              <div className="de_file_container">
                <a href={fileLink}>
                  <img src={download_icon}/>
                </a>
                <div className="file_name" key={i}>{c.filename}</div> 
              </div>
            )
          })
        }
      
    </div>
  );
}