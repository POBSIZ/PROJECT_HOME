import './assets/css/activities.scss';

import { Link } from "react-router-dom";
import Axios from 'axios';
import React , { useState, useEffect } from 'react'


function Firstpage() {
    const [data, setdata] = useState()

    useEffect(() => {
        getproject()
    }, [])

    const getproject = async () => {
        await Axios.get("http://172.30.1.20:8000/api/v1/activity/", {
        })
            .then((response) => {
                setdata(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const Showimg = () => {
        const arr = []
        let prev = 0
        data.map((v) => {
            if (prev != v.month) {
                prev = v.month
                arr.push(
                    <>
                        <div className='line'>
                            {v.year}년 {v.month}월
                        </div>
                        <div className='line_box'>
                            {data.map((a) => {
                                if (a.month == prev) {
                                    return (
                                        <div className='project_box'>
                                            <Link to={'activity/' + a.id}>
                                                <img className='project_box_img' src={'http://172.30.1.20:8000' + a.thumbnail}></img>
                                            </Link>
                                            <div>{a.title}</div>
                                            <div>{a.year}년 {a.month}월</div>
                                        </div>

                                    )
                                }
                            })}
                        </div>
                    </>
                )
            }
        })
        return (
            <div >
                {arr}
            </div>
        )
    }

    return (
        <div>
            {data != undefined ? <Showimg></Showimg> : ''}
        </div>
    );
}

export default Firstpage;
