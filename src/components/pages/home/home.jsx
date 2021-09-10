import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, BrowserRouter } from "react-router-dom";

function Home() {
  //SNS 연동은 Client ID 발급 받으면 생성 예정
  return (
    <div className="home">
      <div></div>
      <div>
        <span>F.A.Q</span>
        <span>Q</span>
        <div>
          <span>hello</span>
        </div>
        <span>A</span>
        <div>
          <span>hi</span>
        </div>
      </div>
      <div>
        <span>Contact</span>
      </div>
    </div>
  );
}

export default hot(module)(Home);
