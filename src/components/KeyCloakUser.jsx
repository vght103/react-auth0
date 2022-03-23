import React from "react";
import "../style/keyCloakUser.scss";

const KeyCloakUser = () => {
  return (
    <div className="login-container">
      <div className="email-box">
        <label htmlFor="email">이메일</label>
        <input type="text" id="email" />
      </div>
      <div className="password-box">
        <label htmlFor="password">패스워드</label>
        <input type="password" id="password" />
      </div>

      <div>
        <button className="login-btn">로그인</button>
      </div>
    </div>
  );
};

export default KeyCloakUser;
