import { useState } from "react";

// mui
import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

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
        <Button variant="contained" onClick={handleSubmit()}>
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
          id="standard-basic"
          label="Password"
          variant="standard"
          onChange={() => {
            handleChange();
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSubmit()}>
          Sign up
        </Button>
      </Grid>
      <Grid sx={{ bottom: "2px" }}>Already have an account? Click below</Grid>
    </Grid>
  );
};

export { Login, Signup };
