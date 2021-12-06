import React, { useEffect, useState } from "react";
import axios from 'axios';
import { hot } from "react-hot-loader";
import "./test.scss";

import { useSelector, useDispatch } from 'react-redux';
import Actions from "../../../redux/actions";

const Test = () => {
    const dispatch = useDispatch();
    const count = useSelector(store=>store.test)

    return (
        <>
            <h1>{count.value}</h1>
            <button onClick={()=>dispatch(Actions.test.increment(count.value))}>+1</button>
            <button onClick={()=>dispatch(Actions.test.decrement(count.value))}>-1</button>
        </>
    );
}

export default hot(module)(Test);
