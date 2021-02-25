import { Link, Typography } from '@material-ui/core';
import SocialLinks from '../Links/Social';
import useStyles from './copyrightStyle';

const Copyright = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.copyright} variant="p">
        {'Copyright © '}
        <Link color="inherit" href={SocialLinks.sellyourrecords}>
          Sell your records
        </Link>
        <Typography className={classes.copyright} variant="p">
          {' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Typography>
    </div>
  );
};

export default Copyright;
