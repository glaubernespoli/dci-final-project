import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import * as React from 'react';

const Login = () => (
  <div>
    <Typography variant="h5"> Login</Typography>
    <div>
      <Typography variant="h6">Connect With</Typography>
      <div>
        <Button variant="contained" color="primary">
          <FacebookIcon />
        </Button>
        <Button variant="contained" color="primary">
          <InstagramIcon />
        </Button>
        <Button variant="contained" color="primary">
          <WhatsAppIcon />
        </Button>
        <Button variant="contained" color="primary">
          <GoogleIcon />
        </Button>
      </div>
    </div>
    <h3>Or</h3>

    <form noValidate autoComplete="off">
      <div>
        <TextField
          id="email"
          label="Email"
          variant="standard"
          type="email"
          placeholder=" Enter your Email"
        />
      </div>

      <div>
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          placeholder="Enter your Password"
        />
      </div>
      <div>
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Typography variant="p">Remember me</Typography>
      </div>
      <div>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </div>
      <Typography variant="p">
        not yet registered?
        <Button>SignUP</Button>
      </Typography>
    </form>
  </div>
);
export default Login;
