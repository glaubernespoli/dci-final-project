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

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <h2 className={classes.h3}>Login</h2>
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
          <Typography variant="p" className={classes.textF}>
            Remember me
          </Typography>
        </div>
        <div className={classes.textF}>
          <Button variant="contained" color="primary" fullWidth>
            LogIn
          </Button>
        </div>
        <Typography variant="p" className={classes.textF}>
          not yet registered?
          <Button color="secondary">create an account</Button>
        </Typography>
      </form>
    </div>
  );
};
export default Login;
