import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    width: '30vw',
    margin: '2rem auto',
    padding: '1rem 3rem',
    boxShadow: '0 0 1px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  h3: {
    textAlign: 'center'
  },
  icon: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  textF: {
    margin: theme.spacing(1)
  }
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <h2 className={classes.h3}>Create Your Account</h2>
      <hr />
      <div>
        <h3 className={classes.h3}>Connected with</h3>
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
      <h3 className={classes.h3}>OR</h3>

      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="firstName"
          label="First Name"
          variant="standard"
          type="text"
          placeholder="Enter Your First Name"
          className={classes.textF}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="standard"
          type="text"
          placeholder="Enter Your Last Name"
          className={classes.textF}
        />
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
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="standard"
          type="password"
          placeholder="Confirm Your Password"
          className={classes.textF}
        />

        <div className={classes.textF}>
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </div>
        <Typography variant="p" className={classes.textF}>
          already registered?
          <Button color="secondary">LogIn</Button>
        </Typography>
      </form>
    </div>
  );
};
export default SignUp;
