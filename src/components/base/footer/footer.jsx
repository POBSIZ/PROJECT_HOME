import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <h1>Footer</h1>
        </footer>             
    )
}

export default hot(module)(Footer);