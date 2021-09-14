import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, BrowserRouter } from "react-router-dom";

import "./assets/css/project.scss";

import listImage from './assets/img/1.jpg';

const Project = () => {
    return (
        <section className="home_project">
            <h1 className="home_project-title">PROJECT</h1>
            <ul className="project_list">

                {[...Array(9)].map(itm=>{
                    return(
                        <li className="project_list-itm">
                            <div className="itm-img" style={{backgroundImage: `url(${listImage})`,}}></div>
                            <div className="itm_text">
                                <h3>TEST</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Reiciendis voluptatibus maxime ratione ipsam esse perspiciatis,
                                </p>
                            </div>
                        </li>
                    )
                })}

            </ul>
            <Link className="move-project">더보기</Link>
        </section>
    );
}

export default hot(module)(Project);
