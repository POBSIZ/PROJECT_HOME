import './assets/css/project.scss';
import React, { useState, useEffect } from 'react';
import Fristpage from './activities/activities'
import Secondpage from './activitylist/activitylist'
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

function App({ match, history }) {

    // 'http://172.30.1.18:8000/api/v1/activity/detail/' + id
    return (
        <>
            <div className='main_title'>
                활동✍
            </div>
            <div className='main_sub_title'>
                <div className='main_title_sub'>
                    PROJECT의 활동
                </div>
                <div className='main_title_sub'>
                    다양한 기록
                </div>
            </div>
            <React.Fragment>
                <Route exact path={match.path} component={Fristpage} >
                    <Fristpage match={match} history={history} />
                </Route>
                <Route path={`${match.path}/:id`} render={({ match, history, location }) => (
                    <Secondpage location={location} history={history} match={match} />
                )}>
                </Route>
            </React.Fragment>
        </>
    );

}

export default App;