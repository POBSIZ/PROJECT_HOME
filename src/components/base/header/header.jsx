import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/App.scss';

const App = () => {
    return (
        <div className="main">
            <h1>Webpack with React</h1>
        </div>             
    )
}

export default hot(module)(App);