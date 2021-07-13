/* eslint-disable camelcase */
import { useAuth0 } from '@auth0/auth0-react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, given_name, family_name, locale } = user;

  return (
    <Card
      sx={{
        width: '25vw',
        margin: '0 auto'
      }}
    >
      <CardMedia
        component="img"
        alt="profile picture"
        // height="30vw"
        image={picture}
        title={`${name} picture`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name.toUpperCase()}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          First Name: &nbsp;
          <Typography variant="subtitle1" display="inline">
            {given_name}
          </Typography>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Last Name: &nbsp;
          <Typography variant="subtitle1" display="inline">
            {family_name}
          </Typography>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          User email: &nbsp;
          <Typography variant="subtitle1" display="inline">
            {email}
          </Typography>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Preferred Language: &nbsp;
          <Typography variant="subtitle1" display="inline">
            {locale}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
