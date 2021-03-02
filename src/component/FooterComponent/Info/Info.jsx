import { Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { AboutUsRoute, ContactUsRoute } from '../../Routing';
import useStyles from './infoStyle';

const Info = () => {
  const classes = useStyles();

  return (
    <div className={classes.infoStyle}>
      <Typography variant="p" component="div">
        <Link component={RouterLink} to={AboutUsRoute} color="white">
          About Us
        </Link>
      </Typography>
      <Typography variant="p" component="div">
        <Link component={RouterLink} to={ContactUsRoute} color="white">
          Contact Us
        </Link>
      </Typography>
    </div>
  );
};

export default Info;
