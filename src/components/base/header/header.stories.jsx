import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import Header from './header';

export default {
    component: Header,
    title: 'Header',
};

export const Default = () => {
    return(
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <script src="https://kit.fontawesome.com/8f489167ce.js" crossorigin="anonymous"></script>
            </Helmet>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </>
    )
}