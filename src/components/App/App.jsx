import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, Route, BrowserRouter, Router } from "react-router-dom";
import { Helmet } from 'react-helmet';

import Header from "../base/header/header";
import Main from "../main/main";
import Footer from "../base/footer/footer";

import banner from './assets/img/banner.jpg'
import favicon from './assets/img/favicon.png'

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Actions from "../../redux/actions";


const App = () => {

  const store = useSelector(store => store);
  const dispatch = useDispatch();


  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    // return () => { }
  }, [])


  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default hot(module)(App);
