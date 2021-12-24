import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

import "./assets/css/result.scss";

// WAVE
import wa_wave from './assets/img/wave/wa_wave.svg'
import ds_wave from './assets/img/wave/ds_wave.svg'
import gd_wave from './assets/img/wave/gd_wave.svg'
import iot_wave from './assets/img/wave/iot_wave.svg'
import sc_wave from './assets/img/wave/sc_wave.svg'

// ICO
// ico-DATA
import da_ico from './assets/img/ico/data/da.png'
import db_ico from './assets/img/ico/data/db.png'
import ml_ico from './assets/img/ico/data/ml.png'
// ico-GAME
import cd_ico from './assets/img/ico/game/cd.png'
import sp_ico from './assets/img/ico/game/sp.png'
import uiux_ico from './assets/img/ico/game/uiux.png'
import d3m_ico from './assets/img/ico/game/3dm.png'
// ico-SERCURITY
import ma_ico from './assets/img/ico/sercurity/ma.png'
import wh_ico from './assets/img/ico/sercurity/wh.png'
// ico-WEBAPP
import dad_ico from './assets/img/ico/webapp/dad.png'
import mad_ico from './assets/img/ico/webapp/mad.png'
import server_ico from './assets/img/ico/webapp/server.png'
import front_ico from './assets/img/ico/webapp/front.png'
// ico-IOT
import iot_ico from './assets/img/ico/iot.png'

import resultSet from "./resultSet";

const MbtiResult = ({ location }) => {

    const [scoreState, setScoreState] = useState(location.state.scoreValue);
    const [resultState, setResultState] = useState(
        () => {
            const ire = scoreState?.sort(function (a, b) { return b.score - a.score; })
            const tRes = ire[0].type
            return tRes
        }
    );

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [])

    console.log(scoreState);

    const renderResult = () => {
        let bgSrc = "";
        let icoSrc = "";
        let colorSrc = "";
        let typeSrc = "";

        switch (resultState) {
            // WEBAPP
            case 'front': icoSrc = front_ico; bgSrc = wa_wave; colorSrc = '#C448C8'; typeSrc = 'Web & Application'; break;
            case 'back': icoSrc = server_ico; bgSrc = wa_wave; colorSrc = '#C448C8'; typeSrc = 'Web & Application'; break;
            case 'desk': icoSrc = dad_ico; bgSrc = wa_wave; colorSrc = '#C448C8'; typeSrc = 'Web & Application'; break;
            case 'mobile': icoSrc = mad_ico; bgSrc = wa_wave; colorSrc = '#C448C8'; typeSrc = 'Web & Application'; break;

            // GAME
            case 'model': icoSrc = d3m_ico; bgSrc = gd_wave; colorSrc = '#0D60D3'; typeSrc = 'Game Developer'; break;
            case 'uiux': icoSrc = uiux_ico; bgSrc = gd_wave; colorSrc = '#0D60D3'; typeSrc = 'Game Developer'; break;
            case 'gclient': icoSrc = cd_ico; bgSrc = gd_wave; colorSrc = '#0D60D3'; typeSrc = 'Game Developer'; break;
            case 'gserver': icoSrc = sp_ico; bgSrc = gd_wave; colorSrc = '#0D60D3'; typeSrc = 'Game Developer'; break;

            // DATA
            case 'dbm': icoSrc = db_ico; bgSrc = ds_wave; colorSrc = '#F24D4D'; typeSrc = 'Data Scienist'; break;
            case 'bigdb': icoSrc = da_ico; bgSrc = ds_wave; colorSrc = '#F24D4D'; typeSrc = 'Data Scienist'; break;
            case 'mle': icoSrc = ml_ico; bgSrc = ds_wave; colorSrc = '#F24D4D'; typeSrc = 'Data Scienist'; break;

            // SERCURITY
            case 'what': icoSrc = wh_ico; bgSrc = sc_wave; colorSrc = '#FFB327'; typeSrc = 'Security'; break;
            case 'ma': icoSrc = ma_ico; bgSrc = sc_wave; colorSrc = '#FFB327'; typeSrc = 'Security'; break;

            // IOT
            case 'iot': icoSrc = iot_ico; bgSrc = iot_wave; colorSrc = '#2BBA81'; typeSrc = 'Internet of Thing'; break;
        }

        let resultText = "";
        resultSet.map((item, i) => {
            if (item.type == typeSrc) {
                item.list.map((intem, k) => {
                    if (intem.type == resultState) {
                        resultText = intem;
                    }
                })
            }
        });

        return (
            <>
                <section className="result_header" style={{ backgroundImage: `url(${bgSrc})` }}>
                    <h3>당신이 개발자라면</h3>
                    <div className="result_header-icon">
                        <img src={icoSrc} />
                    </div>
                    <div className="result_header-title">
                        <span className="title-sub">{typeSrc}</span>
                        <h2 className="title-main">{resultText.detail}</h2>
                    </div>
                </section>

                <section className="result_main">
                    {
                        resultText.desc.map((item, o) => {
                            return (
                                <li className="result_main-itm" key={o}>
                                    <div className="itm-title">
                                        <hr style={{ backgroundColor: colorSrc }} />
                                        <h1>{item.title}</h1>
                                    </div>
                                    <p className="itm-text">{item.text}</p>
                                </li>
                            )
                        })
                    }

                    <ul className="result_main-need">
                        <hr style={{ backgroundColor: colorSrc }} />
                        <h1>직무 요구 조건📑</h1>
                        {
                            resultText.need.map((item, l) => {
                                return (
                                    <li className="need-itm" key={l}>{item.text}</li>
                                )
                            })
                        }
                    </ul>

                    <div className="result_main-share">
                        <hr />
                        <h1>결과를 SNS에 공유해주세요!📸</h1>
                        <hr />
                        <p>
                            <span>#프로젝트</span>
                            <span>#DETI</span>
                            <span>#유니브엑스포</span>
                            <span>#MBTI</span>
                            <span>#개발자_성향_검사</span>
                        </p>
                    </div>

                </section>

                <section className="result_footer" style={{ backgroundImage: `url(${bgSrc})` }}></section>
            </>
        )
    }

    return (
        <article className="mbti-result">

            {renderResult()}

        </article>
    )

}

export default hot(module)(MbtiResult);