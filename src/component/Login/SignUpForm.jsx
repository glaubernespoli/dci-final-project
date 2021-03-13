import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { LoginRoute } from '../Routing/routes';
import LoginStyles from './LoginStyles';

const SignUpForm = () => {
  const classes = LoginStyles();

  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="firstName"
          label="First Name"
          variant="standard"
          type="text"
          className={classes.textF}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="standard"
          type="text"
          className={classes.textF}
        />
        <TextField
          id="email"
          label="Email Address"
          variant="standard"
          type="email"
          className={classes.textF}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          className={classes.textF}
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="standard"
          type="password"
          className={classes.textF}
        />

        <div className={classes.textF}>
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </div>
        <Typography variant="p" className={classes.textF} fontFamily="monospace">
          already registered?
          <Button variant="inherit" className={classes.btn} component={Link} to={LoginRoute}>
            LogIn
          </Button>
        </Typography>
      </form>
    </div>
  );
};

export default SignUpForm;
