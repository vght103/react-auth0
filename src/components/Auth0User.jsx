import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import "../style/userInfo.scss";
import Login from "./Login";

const Auth0User = () => {
  const { isLoading, error, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="user-wrap">
      <div className="login-box">
        <Login />
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Oops...{error.message}</div>}

      {isAuthenticated ? (
        <div className="user-container">
          <div className="user-info">
            <h3>Hello {user.name ? user.name : user.nickname}</h3>
            <img src={user.picture} alt=""></img>
          </div>

          <div className="user-detail">
            <h3>유저 정보</h3>
            <div className="user-profile">
              <span>{user.email}</span>
              <span>{user.name}</span>
              <span>{user.nickname}</span>
              <img src={user.picture} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="login-message">
          <h3>로그인을 하면 유저 정보를 확인할 수 있습니다.</h3>
        </div>
      )}
    </div>
  );
};

export default Auth0User;
