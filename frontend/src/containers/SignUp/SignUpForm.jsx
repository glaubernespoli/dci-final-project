import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { LoginRoute } from '../../Routing/routes';
import SignUpStyle from './SignUp.style';

/*
TODO : This component needs to have it's owne File of Styles and not share the Login.styles
*/

const SignUpForm = () => {
  const classes = SignUpStyle();

  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="firstName"
          label="First Name"
          variant="standard"
          type="text"
          // placeholder="Enter Your First Name"
          className={classes.textF}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="standard"
          type="text"
          // placeholder="Enter Your Last Name"
          className={classes.textF}
        />
        <TextField
          id="email"
          label="Email Address"
          variant="standard"
          type="email"
          // placeholder="Enter Your Email"
          className={classes.textF}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          // placeholder="Enter Your Password"
          className={classes.textF}
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="standard"
          type="password"
          // placeholder="Confirm Your Password"
          className={classes.textF}
        />

        <div className={classes.textF}>
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </div>
        <Typography variant="p" className={classes.textF} fontFamily="monospace">
          already registered?
          <Button color="primary" size="medium" component={Link} to={LoginRoute}>
            LogIn
          </Button>
        </Typography>
      </form>
    </div>
  );
};

export default SignUpForm;
