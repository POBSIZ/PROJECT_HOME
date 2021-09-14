import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './scss/NoticeCreate.scss';


export default function NoticeCreate({match}) {

    const [title, setTitle] = useState('')
    const [password, setPassword] = useState('')
    const [newImg, setNewImage] = useState();

    const addFile = async(e) => {

      setLoading(true)
      const formData = new FormData();
      formData.append('image', e.target.file[0]);
      setNewImage(formData)
      setLoading(false)
    }



    const onSubmit = (event) => {
        //event.preventDefault();
        alert('저장되었습니다.')
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
          value={password}
          onChange={(e)=> setPassword(e.target.value)}>
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