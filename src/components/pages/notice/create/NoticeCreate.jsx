import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './scss/NoticeCreate.scss';


export default function NoticeCreate({match}) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imgUrl, setImageUrl] = useState();

    const addFile = async(e) => {
      setImageUrl(e.target.files[0])
      console.log(imgUrl)
    }

    const onSubmit = () => {
      const formData = new FormData();
      formData.append('thumbnail', imgUrl);
      formData.append('title', title);
      formData.append('content', content);

      axios.post('http://3.35.43.53/api/v1/board/1/post', formData)
      .then((res) => {console.log(res)})
      .catch((err) => {console.log("업로드 실패")})

    }

  return(
    <div className="wholeContainer">

      <div className="titleText">공지작성</div>

      <div className="inputBox">
        <input 
          className="titleInput"
          placeholder="제목" 
          value={title} 
          onChange={(e)=> setTitle(e.target.value)}>       
        </input>

        <textarea
          className="ContentInput" 
          placeholder="내용" 
          value={content}
          onChange={(e)=> setContent(e.target.value)}>
        </textarea>

        <div className="fileContainer">
          <button>+</button>
 
          <input type='file'
            id='image'
            //multiple="multiple"
            accept='image/*'
            name='file'
            onChange={addFile} >
          </input>
        </div>

      </div >

      <button className="saveButton" onClick={()=>onSubmit()}>저장</button>

      
    </div>
  );
}