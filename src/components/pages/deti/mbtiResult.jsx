import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

import "./assets/css/result.scss";

import resultSet from "./resultSet";

const MbtiResult = ({location}) => {

    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
    },[])

    const [scoreState, setScoreState] = useState(location.state.scoreValue);

    const [resultState, setResultState] = useState();

    const getResult = () => {
        const result = scoreState?.sort(function(a, b)  {return b.score - a.score;})
        setResultState(result[0].name)
    }
    
    return(
        <>
            <h1>RESULT</h1>
        </>
    )

}

export default hot(module)(MbtiResult);