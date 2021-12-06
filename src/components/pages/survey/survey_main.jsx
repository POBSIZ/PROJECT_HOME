import React from 'react'
import {hot} from 'react-hot-loader';

import './assets/css/survey_main.scss';

const Survey_main = () => {
    return (
        <>
            <div className='survey_main'>
                <h1>모집기간이 아닙니다.</h1>
                <p>모집기간: 12/13(월) ~ 12/20(월)</p>
            </div>
            
        </>
    )
}

export default hot(module)(Survey_main); 