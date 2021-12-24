import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {hot} from 'react-hot-loader';

const Log = () => {

    const [logLine, setLogLine] = useState();

    const getLog = async () => {
        const resLog = await axios({
            method: 'GET',
            url: 'v1/log/showlog'
        })
        setLogLine(resLog.data.log)
    }

    useEffect(() => {
        getLog()
        return () => {}
    }, [])

    return (
        <div>
            <pre style={{
                display: 'block',
                width: 'calc(100% - (5% * 2)) ',
                fontSize: '16px',
                margin: '0 5%',
                padding: '2%',
                overflow: 'scroll',
            }}>
                {logLine}
            </pre>
            <button 
                onClick={getLog}
                style={{
                    display: 'block',
                    width: '40%',
                    height: '50px',
                    margin: '5% auto',
                    fontWeight: 'bold',
                }}    
            >
                RELOAD
            </button>
        </div>
    )
}

export default hot(module)(Log);
