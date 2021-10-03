import React from "react";
import axios from 'axios';
import { hot } from "react-hot-loader";
import "./test.scss";

const Test = () => {
    const token = localStorage?.getItem('access_token');

    const testAPI = () => {
        const url = "http://3.35.43.53/api/v1/reservations/2021-12-28";
        axios.get(url)
            .then((res) => {
                console.log(res)
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    const postAPI = async () => {
        const postDate = await fetch('http://3.35.43.53/api/v1/reservations/2021-12-28', {
            method: "POST",
            mode: 'cors',
            headers:{
                Authorization: `jwt ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    title: 'TEST',
                    description: 'TEST DESCRIPTION',
                    start_time: '12:12:12',
                    end_time: '14:20:10',
                    floor: '1'
                }
            )
        })
        const getDate = await postDate.json();
        console.log(getDate);
    }

    return (
        <>
            <button className="TEST-BTN" onClick={postAPI}>Click Me</button>
            <pre className="TEST-RES"></pre>
        </>
    );
}

export default hot(module)(Test);
