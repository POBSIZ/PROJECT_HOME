import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import { Link, Route } from "react-router-dom";

import "./assets/css/survey.scss";

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import Actions from "../../../../redux/actions";


const SurveyListSubQuestion = ({ sd_item }) => {

    const focusInput = (e) => {
        const textInput = e.target.nextSibling;
        textInput.focus();
    }

    const handleInput = (e) => {
        const radioInput = e.target.previousSibling;
        radioInput.value = e.target.value;
    }

    return (
        <>
            {sd_item.sub_question?.map((td_item, ti) => {
                return (
                    <div className='itm-sub' key={ti}>
                        <label htmlFor={'q' + sd_item.order + '_' + ti}>{td_item.sub_content}</label>
                        {td_item.can_select == false ? (
                            <div className='sub_other'>
                                <input
                                    type="radio"
                                    onClick={e => focusInput(e)}
                                    id={'q' + sd_item.order + '_' + ti}
                                    name={'q' + sd_item.order}
                                    data-id={sd_item.id}
                                    required={sd_item.required}
                                />
                                <input
                                    type='text'
                                    onChange={e => handleInput(e)}
                                    id={'q' + sd_item.order + '_' + ti}
                                    name={'q' + sd_item.order}
                                    data-id={sd_item.id}
                                />
                            </div>
                        ) : (
                            sd_item.can_duplicate == false ? (
                                <input
                                    type="radio"
                                    value={td_item.sub_content}
                                    id={'q' + sd_item.order + '_' + ti}
                                    name={'q' + sd_item.order}
                                    data-id={sd_item.id}
                                    required={sd_item.required}
                                />
                            ) : (
                                <input
                                    type="checkbox"
                                    value={td_item.sub_content}
                                    id={'q' + sd_item.order + '_' + ti}
                                    name={'q' + sd_item.order}
                                    data-id={sd_item.id}
                                    required={sd_item.required}
                                />
                            )
                        )}
                    </div>
                )
            })}
        </>
    )
}

const SurveyListQuestion = ({ fd_item }) => {

    const handleInput = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            {fd_item.question?.map((sd_item, si) => {
                return (
                    <li className='surveyList_question-itm' key={si}>
                        <h2>{sd_item.order} - {sd_item.content}</h2>
                        <p>{sd_item.description}</p>
                        <div className='itm-subList'>
                            {
                                sd_item.is_multichoice == false ? (
                                    <textarea
                                        // type="textarea" 
                                        id={'q' + sd_item.order}
                                        name={'q' + sd_item.order}
                                        data-id={sd_item.id}
                                        required={sd_item.required}
                                        onChange={e=>handleInput(e)}
                                    />
                                ) : (
                                    <SurveyListSubQuestion sd_item={sd_item} />
                                )
                            }
                        </div>
                    </li>
                )
            })}
        </>
    )
}

const SurveyList = ({ questionList }) => {
    return (
        <>
            {questionList?.map((fd_item, fi) => {
                return (
                    <div className='surveyList' key={fi}>
                        <div className='surveyList_head'>
                            <h1>{fd_item.title}</h1>
                            <p className="date">
                                {fd_item.start_date} ~ {fd_item.due_date}
                            </p>
                            <h3>{fd_item.description}</h3>
                        </div>
                        <ul className='surveyList_question'>
                            <SurveyListQuestion fd_item={fd_item} />
                        </ul>
                    </div>
                )
            })}
        </>
    )
}


const Survey = () => {

    const [questionList, setQuestionList] = useState();

    const getQuestionList = async () => {

        const getList = await axios({
            method: 'GET',
            url: `v1/survey/${3}`,
        })
        setQuestionList([getList.data])
        // console.log(getList.data);
    }

    useEffect(() => {
        getQuestionList()
        return () => { }
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        e.persist();

        let files = e.target.profile_files.files;
        let profileFiles = []
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
            profileFiles.push(files[i]);
        }

        for (var key of formData.keys()) { console.log(key); }
        for (var value of formData.values()) { console.log(value); }

        let dataSet = {
            survey_id: [questionList[0].id],
            name: [e.target.name.value],
            phone: [e.target.phone.value],
            birth: [e.target.birth.value],
            gender: [e.target.sex.value],
            univ: [e.target.univ.value],
            is_applied: [true],
            answers: [],
        }

        questionList[0].question.map((item, i) => {
            try {
                const targetValue = eval(`e.target.q${i+1}.value`);
    
                let targetID = eval('');
                const targetLength = eval(`e.target.q${i+1}.length`);
                if (targetLength == undefined) { targetID = eval(`e.target.q${i+1}.dataset.id`); }
                else { targetID = eval(`e.target.q${i+1}[0].dataset.id`); }
    
                dataSet.answers.push({
                    question_id: [targetID],
                    answer: [targetValue]
                })
                
            } catch (error) {
                console.log(error);
            }
        });

        // formData.append('data', new Blob([ JSON.stringify(dataSet) ], {type : "application/json"}));
        formData.append('data', JSON.stringify(dataSet));

        const postSurvey = await axios({
            method: 'POST',
            url: `v1/survey/${3}/applier`,  
            mode: 'cors',
            headers: {
                // 'Content-Type': false,
                'Content-Type': 'multipart/form-data',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: formData,
        })
        console.log(postSurvey);
    }

    return (
        <form className='survey' onSubmit={e => onSubmit(e)}>
            <div className='survey_profile'>
                <h1>기본 정보 기입</h1>
                <input className='profile-name' name='name' type="text" placeholder='이름' required />
                <input className='profile-phone' name='phone' type="text" placeholder='전화번호' required />
                <input className='profile-birth' name='birth' type="date" placeholder='생일' required />
                <select className='profile-sex' name="sex" required >
                    <option value="M">남자</option>
                    <option value="F">여자</option>
                </select>
                <input className='profile-univ' name='univ' type="text" placeholder='소속/학교' required />
            </div>
            <SurveyList questionList={questionList} />

            <div className='survey_file'>
                <input className='profile-file' type="file" name="profile_files" multiple="multiple" />
            </div>

            <button className='survey-submit' type='submit'>제출</button>
        </form>
    );
}

export default hot(module)(Survey);
