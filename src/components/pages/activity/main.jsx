import './assets/css/project.scss';
import React, { useState, useEffect } from 'react';
import Fristpage from './activities/activities'
import Secondpage from './activitylist/activitylist'
import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import { hot } from 'react-hot-loader';

function App({ match, history }) {

    const loc = useLocation();

    // 'http://172.30.1.18:8000/api/v1/activity/detail/' + id
    return (
        <>
            <div className='main_title'>
                활동<span className='emoji'>✍</span>
            </div>
            <div className='main_sub_title'>
                <div className='main_title_sub'>
                    PROJECT의 활동
                </div>
                <div className='main_title_sub'>
                    다양한 기록
                </div>
            </div>
            <Routes>
                <Route path={loc.pathname} elements={<Fristpage match={loc} history={history} />} />
                <Route path={`${loc.pathname}/:id`} render={({ loc, history, location }) => (
                    <Secondpage location={location} history={history} match={loc} />
                )}>
                </Route>
            </Routes>
        </>
    );

}

export default App;