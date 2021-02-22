import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import * as React from 'react';

const useStyles = makeStyles({
  mainDiv: {
    width: '30vw',
    margin: '2rem auto',
    padding: '2rem 3rem',
    boxShadow: '0 0 4px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  h3: {
    textAlign: 'center'
  },
  btn: {
    margin: '1rem 0 .5rem 0'
  },
  icon: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '.5rem'
  }
});

const SignUp = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <h2 className={classes.h3}>Create Your Profile</h2>
      <div>
        <h3 className={classes.h3}>Connect With</h3>
        <div className={classes.icon}>
          <Button variant="outlined" color="inherit">
            <FacebookIcon />
          </Button>
          <Button variant="outlined" color="inherit">
            <InstagramIcon />
          </Button>
          <Button variant="outlined" color="inherit">
            <WhatsAppIcon />
          </Button>
          <Button variant="outlined" color="inherit">
            <GoogleIcon />
          </Button>
        </div>
      </div>
      <h3 className={classes.h3}>Or</h3>

      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="firstName"
          label="First Name"
          variant="standard"
          type="text"
          placeholder="Enter Your First Name"
        />

        <TextField
          id="lastName"
          label="Last Name"
          variant="standard"
          type="text"
          placeholder="Enter Your Last Name"
        />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          type="email"
          placeholder="Enter Your Email"
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          placeholder="Enter Your Password"
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="standard"
          type="password"
          placeholder="Confirm Your Password"
        />
        <div className={classes.btn}>
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </div>
        <Typography variant="p">
          already registered?
          <Button color="secondary">LogIn</Button>
        </Typography>
      </form>
    </div>
  );
};
export default SignUp;
