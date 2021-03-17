import { Link, Typography } from '@material-ui/core';
import useStyles from './CopyrightStyle';
import SocialLinks from './SocialMediaLinks';

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
