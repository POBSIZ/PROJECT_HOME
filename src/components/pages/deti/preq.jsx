import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Link, Route, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import Actions from "../../../redux/actions";

import "./assets/css/preq.scss";

import MBTI from "./mbti";

const PreQuestion = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [q3Type, setQ3Type] = useState();
    const [q2Type, setQ2Type] = useState("디자인");
    const [q1Type, setQ1Type] = useState();

    const [q2Condition, setQ2Condition] = useState(true);
    const [q3Condition, setQ3Condition] = useState(true);

    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
    },[])

    const q3Check = (e) => {
        e.persist();
        console.log(e.target.value)
        setQ3Type(e.target.value)
    }

    const q2Check = (e) => {
        e.persist();
        console.log(e.target.value)
        setQ2Type(e.target.value)
    }

    const q1Check = (e) => {
        e.persist();
        console.log(e.target.value)
        setQ1Type(e.target.value)

        e.target.value == "예" ? (
            setQ2Condition(false),
            setQ3Condition(false)
        ):(
            setQ3Condition(false)
        )
    }

    const postData = () => {
        const data = {
            q3Value: q3Type,
            q2Value: q2Type,
            q1Value: q1Type,
        }
        dispatch(Actions.deti.preq(data));
        navigate('/mbti/question');
    }

    return (
        <>

            {/* 질문-전공 */}
            <section className="question-itm" style={{ margin: "20px", }}>
                <div className="itm-title">
                    <span>Question 1</span>
                    <hr />
                    <h1>IT관련 기술을 배웠거나 배울 예정이신가요?</h1>
                    <p>아니요를 선택하셨으면 3번 문항으로 가주세요</p>
                </div>

                <div className="label-wrapper">
                    <label className="preq-label">
                        <h3>예</h3>
                        <input className="green" type="radio" name="q1" value="예" onClick={q1Check} />
                    </label>

                    <label className="preq-label">
                        <h3>아니오</h3>
                        <input className="red" type="radio" name="q1" value="아니오" onClick={q1Check} />
                    </label>
                </div>
            </section>

            {/* 질문-언어 */}
            <section className="question-itm" style={{ margin: "20px", }}>
                <div className="itm-title">
                    <span>Question 2</span>
                    <hr />
                    <h1>관심있는 언어</h1>
                </div>

                <div className="label-wrapper">
                    <label className="preq-label">
                        <input disabled={q2Condition} type="radio" name="q2" value="C" onClick={q2Check} />
                        <h3>C</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q2Condition} type="radio" name="q2" value="C++" onClick={q2Check} />
                        <h3>C++</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q2Condition} type="radio" name="q2" value="C#" onClick={q2Check} />
                        <h3>C#</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q2Condition} type="radio" name="q2" value="Java" onClick={q2Check} />
                        <h3>Java</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q2Condition} type="radio" name="q2" value="Javascript" onClick={q2Check} />
                        <h3>Javascript</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q2Condition} type="radio" name="q2" value="Python" onClick={q2Check} />
                        <h3>Python</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q2Condition} type="radio" name="q2" value="Swift" onClick={q2Check} />
                        <h3>Swift</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q2Condition} type="radio" name="q2" value="Go" onClick={q2Check} />
                        <h3>Go</h3>
                    </label>
                </div>

            </section>

            {/* 질문-분야 */}
            <section className="question-itm" style={{ margin: "20px", }}>
                <div className="itm-title">
                    <span>Question 3</span>
                    <hr />
                    <h1>관심 분야</h1>
                </div>

                <div className="label-wrapper">
                    <label className="preq-label">
                        <input disabled={q3Condition} type="radio" name="preq" value="웹앱" onClick={q3Check} />
                        <h3>웹/앱</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q3Condition} type="radio" name="preq" value="게임" onClick={q3Check} />
                        <h3>게임</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q3Condition} type="radio" name="preq" value="데이터" onClick={q3Check} />
                        <h3>데이터</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q3Condition} type="radio" name="preq" value="정보보안" onClick={q3Check} />
                        <h3>정보 보안</h3>
                    </label>

                    <label className="preq-label">
                        <input disabled={q3Condition} type="radio" name="preq" value="사물인터넷" onClick={q3Check} />
                        <h3>사물 인터넷</h3>
                    </label>
                </div>
            </section>

            <div onClick={postData} className="start" >검사 시작하기!</div>
        
            {/* <h1 className="delete">강민지 존예!!!!!</h1> */}
            {/* <h1 className="delete">김난영 존예!!!!!</h1> */}

        </>
    )

}

export default hot(module)(PreQuestion);