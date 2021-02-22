import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SocialLinks from '../Links/Social';

const useStyles = makeStyles(() => ({
  copyright: {
    fontStyle: 'italic',
    fontSize: '.8rem'
  }
}));

const Copyright = () => {
  const classes = useStyles();
  const { sellyourrecords } = SocialLinks;

  return (
    <div>
      <Typography className={classes.copyright} variant="p">
        {'Copyright © '}
        <Link color="inherit" href={sellyourrecords}>
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
