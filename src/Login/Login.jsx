import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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
    boxShadow: '0 0 6px'
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

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <h2 className={classes.h3}>Login</h2>
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

        <div>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <Typography variant="p">Remember me</Typography>
        </div>
        <div className={classes.btn}>
          <Button variant="contained" color="primary" fullWidth>
            LogIn
          </Button>
        </div>
        <Typography variant="p">
          not yet registered?
          <Button color="secondary">SignUp</Button>
        </Typography>
      </form>
    </div>
  );
};
export default Login;
