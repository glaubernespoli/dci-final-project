import { Button, Checkbox, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { SignUpRoute } from '../Routing/routes';
import LoginStyles from './LoginStyles';

const LoginForm = () => {
  const classes = LoginStyles();

  return (
    <form className={classes.form} noValidate autoComplete="off">
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
          Login
        </Button>
      </div>
      <Typography variant="p" className={classes.textF} fontFamily="monospace">
        not yet registered?
        <Button variant="inherit" className={classes.btn} component={Link} to={SignUpRoute}>
          create an account
        </Button>
      </Typography>
    </form>
  );
};

export default LoginForm;
