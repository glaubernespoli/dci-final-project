import { Button, Checkbox, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { SignUpRoute } from '../../Routing/routes';
import LoginStyles from './Login.styles';

const LoginForm = () => {
  const classes = LoginStyles();

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        id="email"
        label="Email Address"
        variant="standard"
        type="email"
        placeholder="Enter Your Email"
        className={classes.textF}
      />

      <TextField
        id="password"
        label="Password"
        variant="standard"
        type="password"
        placeholder="Enter Your Password"
        className={classes.textF}
      />

      <div>
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Typography variant="p" fontFamily="monospace" className={classes.textF}>
          Remember me
        </Typography>
      </div>
      <div className={classes.textF}>
        <Button variant="contained" color="primary" fullWidth>
          LogIn
        </Button>
      </div>
      <Typography variant="p" className={classes.textF} fontFamily="monospace">
        not yet registered?
        <Button color="inherit" size="small" component={Link} to={SignUpRoute}>
          Sign Up
        </Button>
      </Typography>
    </form>
  );
};

export default LoginForm;
