import { useState } from "react";
import * as React from "react";
import { Signup, Login } from "../pages/LoginSignup";
import Grid from "@mui/material/Grid";

import Switch from "@mui/material/Switch";
const LogComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleChange = () => {
    setIsLogin(!isLogin);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight={"100vh"}
    >
      <Grid item xs={4}>
        {isLogin ? <Login /> : <Signup />}
        <Switch
          sx={{ right: "-14.5vw" }}
          defaultChecked
          color="warning"
          onChange={() => handleChange()}
        >
          {isLogin ? "Sign Up" : "Sign In"}
        </Switch>
      </Grid>
    </Grid>
  );
};

export default LogComponent;
