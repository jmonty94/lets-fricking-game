import { Login, Signup } from "../../pages/Signinup";
import React, { useState } from "react";
const LoginComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div styles={{ display: "flex" }}>
      <div>{isLogin ? <Login /> : <Signup />}</div>
      <button onClick={() => handleClick()}>
        {isLogin ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};

export default LoginComponent;
