import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './scss/NoticeCreate.scss';


export default function NoticeCreate({match}) {

    // const [title, setTitle] = useState('')
    // const [password, setPassword] = useState('')
    // const [img, setImage] = useState(null);

    // const onImgChange = (e) => { 
    //   setImage(e.target.files[0]);
    // }

    // const onSubmit = (event) => {
    //     //event.preventDefault();
    //     alert('저장되었습니다.')
    // }

  return(
    <div>
      <div style={{display:'flex' ,flexDirection:'column', border:"1px solid black"}}>
        <h1 style={{textAlign:'left', marginLeft:50 }}>추가페이지</h1>
      </div>

      {/* <div className="inputBox">
        <input 
          className="titleBox"
          placeholder="제목" 
          value={title} 
          onChange={(e)=> setTitle(e.target.value)}>       
        </input>

        <input 
          className="ContentBox" 
          placeholder="내용" 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}>
        </input>

        <input type='file'
          className='titleBox'
          id='file'
          accept='image/*'
          name='file'
          onChange={onImgChange} >
        </input>
                
      
      </div >

      <button className="saveButton" onClick={()=>onSubmit()}>저장</button> */}
    </div>
  );
}