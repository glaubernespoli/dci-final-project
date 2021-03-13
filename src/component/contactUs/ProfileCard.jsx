import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import contactUs from './ContactStyle';

const ProfileCard = ({ name, designation, img }) => {
  const classes = contactUs();

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" alt="G" height="220" image={img} className={classes.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <span className={classes.span1}>{name}</span>
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {designation}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              <h6> JavaScript || React || NodeJs || MongoDB || BootStrap || Sass || JQuery ||</h6>
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
  img: PropTypes.string.isRequired
};
export default ProfileCard;
