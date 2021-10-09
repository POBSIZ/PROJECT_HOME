import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import { useCookies } from "react-cookie";
import './scss/NoticeDetail.scss';




export default function NoticeDetail({location}) {

  const [files, setFiles] = useState([]);
  const [data, setData] = useState([]);
  const [userdata, setUserData] = useState([]);
  const [cookies, setCookie] = useCookies();

  const history = useHistory();
  let location_data = location.state;
  let dataId = location_data.id

  const thumbnail = 'http://3.35.43.53' + `${location_data.thumbnail}`
  console.log("원래 썸네일 주소가 뭐지?", location_data.thumbnail)
  let create_date = (location_data.created_date).substring(0,10);

  const token = localStorage?.getItem('access_token');
  

  const getNoticeDetail = () => {
    const url = 'http://3.35.43.53/api/v1/board/1/post/'+`${dataId}`;
    axios.get(url)
    .then((res) => {
      setData(res.data);
      setFiles(res.data.postfile)
      console.log("새로받은 데이터", res.data)
      console.log("파일 데이터", res.data.postfile)
    })
    .catch(function(error) {
        console.log("실패");
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
      console.log("유저 데이터", res.data)
    })
    .catch(function(error) {
        console.log("유저데이터실패");
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

  const downloadFunc = () => {
    // axios.get(`http://3.35.43.53${data.thumbnail}`, 
    //   {
    //     headers: { Authorization: `jwt ${token}` },
    //     responseType: 'blob'
    //   })
    // .then(response => {
    //   FileSaver.saveAs(new Blob([response.data]));
    // });
    const 요소 = document.createElement("a"); 
    const 파일 = new Blob([document.getElementById('input').value],     
               {유형: 'text/plain;charset=utf-8'}); 
    element.href = URL.createObjectURL(파일); 
    element.download = "myFile.txt"; 
    document.body.appendChild(요소); 
    
    element.click(); 
  }

  const downloadTest = () => {
    const url = "http://3.35.43.53/api/v1/board/file/1";

    axios.get(url, {
      headers: { responseType: 'application/blob' }
    })
    .then((res) => {
      console.log("파일데이터 다운받기....", )
      const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'file.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
    })
    .catch(function(error) {
      console.log("다운로드 실패");
    })
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
    //getCookieValue();

  }, [])



  return(
    <div className="nDetail_container">

      <div className="listBack_container">
        <div>𝄘</div>
        <Link to="/notice" className="nav-itm">목록</Link>
      </div>

      <div className="modifyContainer">

        <div className="hits_box">

          <span className="hits_text">{data.hits}</span>
        </div>

        { userdata.is_superuser == true ? 
          <div className="button_box">
            {/* <button>수정</button> */}
            <button onClick={()=>deleteFunc()}>삭제</button>
          </div>
        :
          <div></div>
        }
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
          <div>
            {files.map((c, i)=> {
              return(
                <div>
                  <div key={i}>파일 {c.filename}</div> 
                    <a href="http://3.35.43.53/api/v1/board/file/1">다운로드</a>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      
    </div>
  );
}