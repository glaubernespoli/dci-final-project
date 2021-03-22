import { Typography } from '@material-ui/core';
import React from 'react';
import SocialMedia from '../../components/SocialMedia/SocialmediaIcons';
import SignUpStyle from './SignUp.style';
import SingUpForm from './SignUpForm';

/*
TODO : This component needs to have it's owne File of Styles and not share the Login.styles
*/

const SignUp = () => {
  const classes = SignUpStyle();

  return (
    <div className={classes.mainDiv}>
      <Typography variant="h5" color="secondary" className={classes.typography}>
        Create Your Account
      </Typography>
      <hr />
      <div>
        <Typography variant="h5" color="blue" className={classes.typography}>
          Connected with
        </Typography>
        {/* Importing Social Media Link */}

        <SocialMedia />
      </div>
      <Typography variant="h5" color="blue" className={classes.typography}>
        OR
      </Typography>
      {/* imported the SignUp form */}
      <SingUpForm />
    </div>
  );
};
export default SignUp;
