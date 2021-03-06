import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import ProfileCardStyles from './ProfileCard.style';

const ProfileCard = ({ name, designation, img, skills }) => {
  const classes = ProfileCardStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" alt="G" image={img} className={classes.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <span className={classes.span}>{name}</span>
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {designation}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              <h6>{skills}</h6>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired
};
export default ProfileCard;
