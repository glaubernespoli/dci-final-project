import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import * as React from 'react';

const useStyles = makeStyles({
  // root: {
  //   "& > *": {
  //     margin: theme.spacing(2),
  //     width: "30vw",
  //   },
  // },
  mainDiv: {
    width: '22vw',
    margin: '2rem auto',
    padding: '2rem 3rem',
    boxShadow: '0 0 4px',
    backgroundColor: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '.5rem 0',
  },
  h3: {
    padding: '.25rem 0',
    textAlign: 'center',
  },
  btn: {
    margin: '1rem 0 .5rem 0',
  },
  icon: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '.5rem',
  },
});

const SignUp = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <h2 className={classes.h3}> Sign Up</h2>
      <div>
        <h3 className={classes.h3}>Connect With</h3>
        <div className={classes.icon}>
          <Button variant="outlined" color="primary">
            <FacebookIcon />
          </Button>
          <Button variant="outlined" color="primary">
            <InstagramIcon />
          </Button>
          <Button variant="outlined" color="primary">
            <WhatsAppIcon />
          </Button>
          <Button variant="outlined" color="primary">
            <GoogleIcon />
          </Button>
        </div>
      </div>
      <h3 className={classes.h3}>Or</h3>

      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="firstName" label="First Name" variant="standard" type="text" />
        <TextField id="lastName" label="Last Name" variant="standard" type="text" />
        <TextField id="email" label="Email" variant="standard" type="email" />

        <TextField id="password" label="Password" variant="standard" type="password" />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="standard"
          type="password"
        />
        <div className={classes.btn}>
          <Button variant="contained" fullWidth>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
