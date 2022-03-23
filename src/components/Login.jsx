import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../style/login.scss";

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button className="login-btn" onClick={loginWithRedirect}>
          로그인
        </button>
      ) : (
        <button
          className="logout-btn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          로그아웃
        </button>
      )}
    </div>
  );
};

export default Login;
