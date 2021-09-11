
import './assets/css/activitylist.scss';
import React , { useState, useEffect } from 'react'
import 'aos/dist/aos.css';

import Axios from 'axios';

function Secondpage({ match, setmodal, history }) {
    let id = history.location.pathname.split('/activity/')[1]
    const [data, setdata] = useState()

    useEffect(() => {
        getproject()
    }, [])

    const getproject = async () => {
        await Axios.get("http://172.30.1.20:8000/api/v1/activity/" + id + '/', {
        }).then((response) => {
            setdata(response.data)
        })
            .catch((error) => {
                console.log(error)
            });
    }

    const Print_box = () => {
        const arr = []
        data.data.map((v) => {
            arr.push(
                <div className='large_box'>
                    <img onClick={() => setmodal(true)} className='img_box' src={'http://172.30.1.20:8000' + v.image}></img>
                    <div className='text_box'>
                        {v.title}
                    </div>
                </div>
            )
        })
        return (
            <>
                {arr}
            </>
        )
    }

    return (
        <>
            {  data != undefined ?
                <>
                    <h1>
                        {data.description}
                    </h1>
                    <div className="main_box">
                        <Print_box />
                    </div>
                </> : ''}
        </>
    );
}

export default Secondpage;
