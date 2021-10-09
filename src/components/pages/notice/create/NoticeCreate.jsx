import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import './scss/NoticeCreate.scss';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState } from 'draft-js';


export default function NoticeCreate({match}) {

    const history = useHistory();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imgUrl, setImageUrl] = useState();

    const [fileUrl, setFileUrl] = useState([]);
    const [fileName, setFileName] = useState([]);

    const token = localStorage?.getItem('access_token');
    console.log('토큰 : ',token)
    const config = {
      headers: {"Authorization": `JWT ${token}`}
    }


      // useState로 상태관리하기 초기값은 EditorState.createEmpty()
      // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
      // const [editorState, setEditorState] = useState(EditorState.createEmpty());
    
      // const onEditorStateChange = (editorState) => {
      //   // editorState에 값 설정
      //   setEditorState(editorState);
      // };

    const addImage = (e) => {
      const thumbnail = e.target.files[0]
      console.log("썸네일 제발 찍혀라", thumbnail)
      //const lookImg = URL.createObjectURL(thumbnail);
      setImageUrl(thumbnail)
    }

    const addFile = (e) => {
      const selectFile = e.target.files[0];
      //setFileUrl(selectFile)
      //화면에 보여질 이름 리스트
      // const fileNameList = []
      // const fileInfo = []

      // for(let i = 0; i<selectFile.length; i+=1) {
      //   const selectName = selectFile[i].name
      //   fileNameList.push(selectName)
      //   fileInfo.push(selectFile[i])
      // }

      // console.log("파일 이름 리스트",fileNameList)
      // console.log("파일 인포 리스트",fileInfo)
      // setFileName(fileNameList)
      // setFileUrl(fileInfo)
    }

    const onSubmit = async (e) => {

      console.log("실행 자체가 안되네..?")
      console.log("파일 여러개 리스트 담겼니?", fileUrl)
      
      const formData = new FormData();
      formData.append('thumbnail', imgUrl);
      formData.append('title', title);
      formData.append('content', content);
      formData.append('upload_files', fileUrl);


      // for (let i=0; i>fileUrl.length; i++) {
      //   console.log("이거 실행돼??")
      //   formData.append('upload_files', fileUrl[i]);
      //   console.log("파일 하나하나의 정보는?", fileUrl[i])
      // }

      // fileUrl.forEach(file=>{
      //   formData.append("upload_files", file);
      // });

      
      axios.post('http://3.35.43.53/api/v1/board/1/post', formData, 
      {
        headers:{
          Authorization: `jwt ${token}`,
          'Content-Type': 'application/json'
          },
      })
      .then((res) => { 
        console.log("완료 데이터", res)
        if (res.statusText ==  "Created") {
          alert("공지를 생성했습니다.");
        }
        history.push('/notice');
        location.reload();
       })
      .catch((err) => {console.log("업로드 실패")})

      
    }

  return(

   

    <div className="whole_container">

      <div className="title_text">공지작성</div>

      <div className="input_container">
        <input 
          className="title_input"
          placeholder="제목" 
          value={title} 
          onChange={(e)=> setTitle(e.target.value)}>       
        </input>

        <textarea
          name="content"
          className="Content_input" 
          placeholder="내용" 
          value={content}
          onChange={(e)=> setContent(e.target.value)}
        >
        </textarea>

        <input 
          className="image_input"
          type='file'
          id='image'
          accept='image/*'
          name='image'
          onChange={addImage} 
        >
        </input>

        <div className="fileContainer">

          <input type='file'
            id='file'
            //multiple="multiple"
            accept='file/*'
            name='file'
            onChange={addFile} >
          </input>

          {/* <div className="file_list">
            {fileName.map((c, i)=> {
              return(<div>{c}</div>)
            })}
          </div> */}
        </div>

      </div >

      <button className="save_button" onClick={()=>onSubmit()}>저장</button>

      
    </div>
  );
}