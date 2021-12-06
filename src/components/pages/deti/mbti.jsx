import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Link, useLocation  } from "react-router-dom";
import "./assets/css/style.scss";

import questions from "./question";

const MBTI = () => {

    const location = useLocation();

    console.log(location)

    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
    },[])

    const preqValue = [
        {
            type: '웹앱',
            sumlist: ['front', 'back', 'desk', 'mobile']
        },
        {
            type: '게임',
            sumlist: ['model', 'uiux','gclient', 'gserver']
        },
        {
            type: '데이터',
            sumlist: ['mle', 'dbm', 'bigdb']
        },
        {
            type: '정보보안',
            sumlist: ['ma', 'what']
        },
        {
            type: '사물인터넷',
            sumlist: ['iot']
        },
    ]

    const [totalScore, setTotalScore] = useState(
        [
            { type: 'front', name: "FrontEnd", score: 0.0, },
            { type: 'back', name: "Backend", score: 0.0, },
            { type: 'desk', name: "데탑", score: 0.0, },
            { type: 'mobile', name: "모바일", score: 0.0, },
            { type: 'model', name: "3d model", score: 0.0, },
            { type: 'uiux', name: "uiux", score: 0.0, },
            { type: 'gclient', name: "game client", score: 0.0, },
            { type: 'gserver', name: "game server", score: 0.0, },
            { type: 'dbm', name: "dbm", score: 0.0, },
            { type: 'bigdb', name: "bigdb", score: 0.0, },
            { type: 'mle', name: "ML", score: 0.0, },
            { type: 'what', name: "white", score: 0.0, },
            { type: 'ma', name: "악성코드분석가", score: 0.0, },
            { type: 'iot', name: "IOT", score: 0.0, }
        ]
    );

    const calcMbti = (e) => {
        e.persist();
        e.preventDefault();

        const exScore = totalScore;

        let front, back, desk, mobile, model, uiux, gclient, 
            gserver, dbm, bigdb, mle, what, ma, iot ;

        front = back = desk = mobile = model = uiux = gclient
        = gserver = dbm = bigdb = mle = what = ma = iot = 0.0;

        var sz = [7, 6, 6, 6, 5, 6, 5, 5, 4, 6, 5, 6, 6, 3];

        [...Array(34)].map((item, i)=>{

            const exNum = eval(`e.target.n${i}`);

            front += exNum.value * questions[i].effect.front
            back += exNum.value * questions[i].effect.back
            desk += exNum.value * questions[i].effect.desk
            mobile += exNum.value * questions[i].effect.mobile
            model += exNum.value * questions[i].effect.model
            uiux += exNum.value * questions[i].effect.uiux
            gclient += exNum.value * questions[i].effect.gclient
            gserver += exNum.value * questions[i].effect.gserver
            dbm += exNum.value * questions[i].effect.dbm
            bigdb += exNum.value * questions[i].effect.bigdb
            mle += exNum.value * questions[i].effect.mle
            what += exNum.value * questions[i].effect.what
            ma += exNum.value * questions[i].effect.ma
            iot += exNum.value * questions[i].effect.iot

        });

        console.log(location.state.q3Value)
        switch (location.state.q3Value) {
            case '웹앱':
                front += 7.0;
                back += 6.0;
                desk += 6.0;
                mobile += 6.0; 
                break;

            case '게임':
                model += 5.0;
                uiux += 6.0;
                gclient += 5.0; 
                gserver += 5.0;
                break;

            case '데이터':
                dbm += 4.0;
                mle += 5.0; 
                bigdb += 6.0;
                break;

            case '정보보안':
                what += 6.0;
                ma += 6.0; 
                break;

            case '사물인터넷':
                iot += 3.0; 
                break;
        }


        console.log(location.state.q2Value)
        switch (location.state.q2Value) {
            case 'C':
                iot += 3.0; 
                what += 6.0;
                ma += 6.0; 
                break;
                
            case 'C++':
                desk += 6.0;
                gclient += 5.0;
                iot += 3.0;
                break;
                
            case 'C#':
                back += 6.0;
                desk += 6.0;
                gclient += 5.0; 
                gserver += 5.0;
                bigdb += 6.0;
                break;

            case 'Java':
                front += 7.0;
                back += 6.0;
                mobile += 6.0;
                model += 5.0; 
                gclient += 5.0; 
                gserver += 5.0;
                bigdb += 6.0;
                break;

            case 'Javascript':
                front += 7.0;
                uiux += 6.0;
                back += 6.0;
                what += 6.0;
                break;

            case 'Python':
                back += 6.0;
                desk += 6.0;
                gclient += 5.0; 
                gserver += 5.0;
                iot += 3.0; 
                dbm += 4.0;
                bigdb += 6.0;
                mle += 5.0; 
                break;
                
            case 'Swift':
                mobile += 6.0;
                break;
                    
            case 'Go':
                dbm += 4.0;
                back += 6.0;
                mle += 5.0; 
                break;
                    
            case '디자인':
                uiux += 6.0;
                model += 5.0;
                break;
        }
                    

        const jobList = [
            front, back, desk, mobile, model, uiux, gclient, 
            gserver, dbm, bigdb, mle, what, ma, iot 
        ];

        exScore.map((item, i)=>{
            item.score = jobList[i] / sz[i];
        });

        setTotalScore(exScore);
        
        console.log(
            `front: ${front/sz[0]}\n`,
            `back: ${back/sz[1]}\n`,
            `desk: ${desk/sz[2]}\n`,
            `mobile: ${mobile/sz[3]}\n`,
            `model: ${model/sz[4]}\n`,
            `uiux: ${uiux/sz[5]}\n`,
            `gclient: ${gclient/sz[6]}\n`,
            `gserver: ${gserver/sz[7]}\n`,
            `dbm: ${dbm/sz[8]}\n`,
            `bigdb: ${bigdb/sz[9]}\n`,
            `mle: ${mle/sz[10]}\n`,
            `what: ${what/sz[11]}\n`,
            `ma: ${ma/sz[12]}\n`,
            `iot: ${iot/sz[13]}\n`,
        );

        history.push({
            pathname: "/mbti/result",
            state: {scoreValue: totalScore}
        })
    }

    return (
        <>
            <form className="question-wrapper" onSubmit={calcMbti}>

                {/* <Link to="/mbti">Pre Question</Link> */}

                <div className="itm-title">
                    <span>Question</span>
                    <hr />
                </div>

                {
                    questions.map((item, i) => {
                        return (
                            <div className="question-label" key={i}>
                                <h1>{i + 1}. {item.question}</h1>
                                <div className="input-wrapper">
                                    <input name={'n'+i} value={1.0} type="radio" />
                                    <input name={'n'+i} value={2.0} type="radio" />
                                    <input name={'n'+i} value={3.0} type="radio" />
                                    <input name={'n'+i} value={4.0} type="radio" />
                                    <input name={'n'+i} value={5.0} type="radio" />
                                </div>
                                <div className="input-wrapper">
                                    <p>매우 아니다</p>
                                    <p>보통이다</p>
                                    <p>매우 그렇다</p>
                                </div>
                            </div>
                        )
                    })
                }

                <button className="submit" type="submit">결과 보기</button>
            </form>
        </>
    );

}

export default hot(module)(MBTI);