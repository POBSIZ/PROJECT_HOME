import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/App.scss';

import Header from '../base/header/header';
import Main from '../main/main';
import Footer from '../base/footer/footer';


const App = () => {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>            
    );
}

export default hot(module)(App);