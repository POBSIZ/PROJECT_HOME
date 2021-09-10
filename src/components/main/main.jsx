import React from 'react';
import { hot } from 'react-hot-loader';
import { Link, Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/style.scss';

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route exact path="/"></Route>
            </Switch>
        </main>             
    )
}

export default hot(module)(Main);