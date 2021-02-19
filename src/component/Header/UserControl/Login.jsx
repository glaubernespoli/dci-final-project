import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import * as React from 'react';

const useStyles = makeStyles({
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

const Login = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.mainDiv}>
      <h2 className={classes.h3}> Login</h2>
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
        <TextField id="email" label="Email" variant="standard" type="email" />

        <TextField id="password" label="Password" variant="standard" type="password" />
        <div className={classes.btn}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            name="check"
          />
          {/* <label htmlFor="check">Remember me</label> */}
        </div>
        <div className={classes.btn}>
          <Button variant="contained" fullWidth color="primary">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
