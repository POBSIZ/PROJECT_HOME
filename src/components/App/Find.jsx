import React from "react";

import "./assets/css/Find.scss";

function Find() {
  return (
    <div className="find">
      <div className="find-id">
        <span>아이디 찾기</span>
        <input type="text" placeholder="전화번호를 입력하세요" />
        <input type="button" value="확인" />
      </div>
      <div className="find-pw">
        <span>비밀번호 찾기</span>
        <input type="text" placeholder="아이디를 입력하세요" />
        <input type="button" value="확인" />
      </div>
    </div>
  );
}

export default Find;
