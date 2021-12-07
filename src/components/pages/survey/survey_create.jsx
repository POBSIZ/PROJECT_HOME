import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Link, Route } from "react-router-dom";

import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import Actions from "../../../redux/actions";

import { nanoid } from 'nanoid';

import "./assets/css/survey_create.scss";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-brands-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SurveyClist = () => {
    // console.log('render SurveyClist');

    const dispatch = useDispatch();
    const surveyStore = useSelector(store => store.survey);

    const handleInput = (e, _id, _key, _type) => {
        let _surList = Object.assign([], surveyStore.list);
        _surList.forEach((fd_item, fd_i) => {
            if (fd_item.id == _id) {
                if (_type == 'desc') {
                    fd_item.desc = e.target.value;
                } else if (_type == 'require') {
                    fd_item.required = e.target.checked;
                }else { 
                    fd_item.data = e.target.value; 
                }
            } else {
                fd_item.sub_list.forEach((sd_item, sd_i) => {
                    if (sd_item.id == _id) {
                        sd_item.data = e.target.value;
                    }
                })
            }
        })
        // console.log(_surList);
        dispatch(Actions.survey.create(_surList));
    }

    const renderSubList = (_type, _id, _key) => {
        switch (_type) {

            case '주관식':
                return (
                    <>
                        <div className='sub-title'>
                            <p>주관식</p>
                        </div>
                    </>
                )
                break;

            case '객관식':
                return (
                    <>
                        <div className='sub-title'>
                            <p>항목 이름</p>
                            <input
                                type="text"
                                name='sub_content'
                                id='sub_content'
                                onChange={(e) => handleInput(e, _id, _key, '객관식')}
                            />
                        </div>
                        <input type="radio" name='sub_content-itm' id='sub_content-itm' />
                    </>
                )
                break;

            case '다항식':
                return (
                    <>
                        <div className='sub-title'>
                            <p>항목 이름</p>
                            <input
                                type="text"
                                name='sub_content'
                                id='sub_content'
                                onChange={(e) => handleInput(e, _id, _key, '다항식')}
                            />
                        </div>
                        <input type="checkbox" name='sub_content-itm' id='sub_content-itm' />
                    </>
                )
                break;

            case '기타_객':
                return (
                    <>
                        <div className='sub-title'>
                            <p>기타</p>
                            <input type="radio" name='sub_content-itm' id='sub_content-itm' />
                        </div>
                    </>
                )
                break;

            case '기타_다':
                return (
                    <>
                        <div className='sub-title'>
                            <p>기타</p>
                            <input type="checkbox" name='sub_content-itm' id='sub_content-itm' />
                        </div>
                    </>
                )
                break;

            default:
                break;
        }
    }

    const onDeleteSubItem = (_key, _parentKey) => {
        let _surList = Object.assign([], surveyStore.list);
        _surList[_parentKey].sub_list.splice(_key, 1);
        dispatch(Actions.survey.create(_surList));
    }

    const onClickAddSubItem = (_question, _type) => {
        const _id = nanoid();
        let _surList = Object.assign([], surveyStore.list);
        let _subQuestionList = Object.assign([], _question);
        let data = '';
        if (_type == '기타_다' || _type == '기타_객') {
            data = '기타';
        }
        _subQuestionList.sub_list.push({
            id: _id,
            type: _type,
            data: data,
        });
        dispatch(Actions.survey.create(_surList));
    }

    const onDeleteItem = (_key) => {
        let _surList = Object.assign([], surveyStore.list);
        _surList.splice(_key, 1);
        dispatch(Actions.survey.create(_surList));
    }

    const onClickAddItem = () => {
        const _id = nanoid();
        let _surList = Object.assign([], surveyStore.list)
        _surList.push({
            id: _id,
            data: '',
            desc: '',
            required: false,
            sub_list: [],
        });
        dispatch(Actions.survey.create(_surList));
    }

    return (
        <ul className='surveyCreate_list'>
            {
                surveyStore.list?.map((item, i) => {
                    return (
                        <li className='list_itm' key={item.id}>
                            <div className='list_itm-head'>
                                <button className='itm-delete' onClick={() => onDeleteItem(i)}>
                                    <i className="fas fa-times"></i>
                                </button>
                                <input
                                    type="text"
                                    name='content'
                                    id='content'
                                    placeholder='질문 내용'
                                    onChange={(e) => handleInput(e, item.id, i, null)}
                                />
                                <input
                                    type="text"
                                    name='content'
                                    id='content'
                                    placeholder='질문 설명'
                                    onChange={(e) => handleInput(e, item.id, i, 'desc')}
                                />
                                <input
                                    type="checkbox"
                                    name='require'
                                    id='require'
                                    placeholder='질문 설명'
                                    onChange={(e) => handleInput(e, item.id, i, 'require')}
                                />
                            </div>

                            <ul className='sub-wrapper'>
                                {
                                    item.sub_list?.map((_item, _i) => {
                                        return (
                                            <li className='itm-sub' key={_item.id}>
                                                <div className='itm-delete' onClick={() => onDeleteSubItem(_i, i)}>
                                                    <i className="fas fa-times" />
                                                </div>
                                                {renderSubList(_item.type, _item.id, _i)}
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className='sub_btn-wrapper'>
                                <div className='sub_btn-create'  onClick={() => onClickAddSubItem(item, '주관식', i)}>주관식 문항 추가</div>
                                <div className='sub_btn-create' onClick={() => onClickAddSubItem(item, '객관식', i)}>객관식 문항 추가</div>
                                <div className='sub_btn-create' onClick={() => onClickAddSubItem(item, '다항식', i)}>다항식 문항 추가</div>
                                <div className='sub_btn-create' onClick={() => onClickAddSubItem(item, '기타_객', i)}>기타_객 문항 추가</div>
                                <div className='sub_btn-create' onClick={() => onClickAddSubItem(item, '기타_다', i)}>기타_다 문항 추가</div>
                            </div>

                        </li>
                    )
                })
            }
            <div className='surveyCreate_list-add' onClick={onClickAddItem}>
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </ul>
    )
}

const SurveyCreate = () => {
    // console.log('render SurveyCreate');

    const auth = useSelector(store => store.auth);
    const surveyStore = useSelector(store => store.survey);
    const cookies = useCookies();

    axios.defaults.headers.common['Authorization'] = `JWT ${auth.accessToken}`;
    axios.defaults.headers.common['X-CSRFToken'] = cookies[0].csrftoken;

    const postList = async (e) => {
        e.preventDefault();
        e.persist();

        const _surList = Object.assign([], surveyStore.list)

        console.log(_surList);

        let postData = {
            question: [],
            title: [e.target.title.value],
            description: [e.target.description.value],
            start_date: [e.target.start_date.value],
            due_date: [e.target.due_date.value]
        }
        
        _surList?.forEach((fd_item, fd_i)=>{

            let _is_multichoice = Boolean;
            let _can_duplicate = Boolean;
            let _can_duplicate_list = [];
            let _sub_question = []; 

            if(fd_item.sub_list.length > 1 ){ 
                _is_multichoice = true; 
            }else{ _is_multichoice = false; }

            fd_item.sub_list?.forEach((sd_item, sd_i)=>{
            
                let _can_select = Boolean;
                
                if(sd_item.type == '기타_다' || sd_item.type == '기타_객'){ 
                    _can_select = false; 
                }else{ _can_select = true; }

                if(sd_i == 0){
                    if(sd_item.type == '다항식' || sd_item.type == '기타_다'){ 
                        _can_duplicate = true; 
                    }else{ _can_duplicate = false; }
    
                    _can_duplicate_list.push(_can_duplicate);
                }

                _sub_question.push({
                    sub_content: [sd_item.data],
                    can_select: [_can_select]
                })
            })

            postData.question.push(
                {
                    content: [fd_item.data],
                    description: [fd_item.desc],
                    required: [fd_item.required],
                    order: [fd_i],
                    is_multichoice: [_is_multichoice],
                    can_duplicate: [_can_duplicate_list[0]],
                    sub_question: _sub_question
                }
            )

        })

        console.log(postData);

        const res = await axios.post('v1/survey/', postData);
        console.log(res);
    }

    return (
        <form name='form' className='surveyCreate' onSubmit={(e) => postList(e) }>

            <div className="surveyCreate_head">
                <div className='head-title'>
                    <h1>제목</h1>
                    <input type="text" name='title' id='title' />
                </div>
                <div className='head-date'>
                    <span>시작</span>
                    <input type="date" name="start_date" id="start_date" />
                    <span>마감</span>
                    <input type="date" name="due_date" id="due_date" />
                </div>
                <div className='head-desc'>
                    <h3>설명글</h3>
                    <textarea name='description' id='description' />
                </div>
            </div>

            <SurveyClist></SurveyClist>

            <button className='surveyCreate-submit' type='submit'>POST</button>
        </form>
    );

}

export default hot(module)(SurveyCreate);
