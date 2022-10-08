import { useState } from "react";

// mui
import * as React from "react";
import { Button, Grid, TextField } from "@mui/material";

import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE, LOGIN } from "../utils/mutations";

const Login = () => {
  const [formState, setFormState] = useState({
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

  const [login, {error, data}] = useMutation(LOGIN, {
    email: formState.email,
    password: formState.password,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }
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
        <h1>Login</h1>
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSubmit}>
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

  const [addProfile, {error, data}] = useMutation(ADD_PROFILE, {
    variables: {
      username: formState.username,
      email: formState.email,
      password: formState.password,
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await addProfile({...formState});
      Auth.login(data.addProfile.token);
    } catch (error) {
      console.error(error);
    }
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
        <h1>Sign Up</h1>
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSubmit}>
          Sign up
        </Button>
      </Grid>
      <Grid sx={{ bottom: "2px" }}>Already have an account? Click below</Grid>
    </Grid>
  );
};

export { Login, Signup };
