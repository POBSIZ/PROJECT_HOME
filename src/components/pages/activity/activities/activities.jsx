import './assets/css/activities.scss';
import './assets/css/activites_mobile.scss';

import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import Axios from 'axios';
import Aos from 'aos';
import React , { useState, useEffect } from 'react'


function Firstpage({match}) {
    console.log(match)
    const baseurl = 'http://3.35.43.53/'
    const [data, setdata] = useState()

    useEffect(() => {
        getproject()
    }, [])

    const getproject = async () => {
        console.log('실행')
        await Axios.get(baseurl + "api/v1/activity/", {
        })
            .then((response) => {
                console.log(response.data)
                setdata(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const Showimg = () => {
        const arr = []
        let prev = 0
        let prev_year = 0
        data.map((v, i) => {
            if( prev_year != v.year){
                arr.push(
                    <div className='line_text' key={i+"1"}>
                        <div className='line_text_div'></div>
                        <div className='line_text_year'>
                            {v.year}년
                        </div> 
                    </div>
                )
            }
            if (prev != v.month) {
                prev = v.month
                prev_year = v.year
                arr.push(
                    <div className="project-wrapper" key={i+"2"}>

                        <div className='line_text'>
                        <div className='line_text_div_month'></div>
                            <div className='line_text_month'>{v.month}월
                            </div>
                        </div>
                        <div className='line_box'>
                            {data.map((a, ii) => {
                                if (a.month == prev) {
                                    return (
                                        <div key={ii+"3"} className='project_box'>
                                            {/* <Link to={`/activity/${a.id}`}> */}
                                                <img className='project_box_img' src={baseurl + a.thumbnail}></img>
                                            {/* </Link> */}
                                            <div className='project_box_text'>
                                                <div className="project_box_text-title">
                                                    {a.title}
                                                </div>
                                                <div className="project_box_text-date">
                                                    {a.year} 년 {a.month} 월
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                )
            }
        })
        return (
            <div className='main_width_box'>
                {arr}
            </div>
        )
    }

    Aos.init()
    return (
        <>
            <div className='main_first'>
            {data != undefined ? <Showimg></Showimg> : ''}
            </div>
        </>
    );
}

export default Firstpage;
