import { useState } from "react";
import Logo from "./../assets/images/logo-lfg-black_adobe_express.svg";

// mui
import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";

const Login = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // handle login submit with graphql
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "9vw",
            position: "relative",
          }}
        />
        <h1>Login</h1>
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          onChange={() => {
            handleChange();
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          onChange={() => {
            handleChange();
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={handleSubmit()}
          style={{
            fontWeight: "400",
            fontSize: "11pt",
            borderRadius: "3px",
            cursor: "pointer",
            background: red[700],
          }}
        >
          Login
        </Button>
      </Grid>
      <Grid sx={{ bottom: "2px" }}>Don't have an account? Click below</Grid>
    </Grid>
  );
};

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // handle login submit with graphql
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "9vw",
            position: "relative",
          }}
        />
        <h1>Sign Up</h1>
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          onChange={() => {
            handleChange();
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-password"
          label="Password"
          variant="standard"
          type="password"
          onChange={() => {
            handleChange();
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-password"
          label="Password"
          type="password"
          placeholder="confirm password"
          variant="standard"
          onChange={() => {
            handleChange();
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={handleSubmit()}
          style={{
            fontWeight: "400",
            fontSize: "11pt",
            borderRadius: "3px",
            cursor: "pointer",
            background: red[700],
          }}
        >
          Sign up
        </Button>
      </Grid>
      <Grid sx={{ bottom: "2px" }}>Already have an account? Click below</Grid>
    </Grid>
  );
};

export { Login, Signup };
