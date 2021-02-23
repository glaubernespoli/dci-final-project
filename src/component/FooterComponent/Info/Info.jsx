import { Link, Typography } from '@material-ui/core';
import useStyles from './infoStyle';

const Info = () => {
  const classes = useStyles();

  return (
    <div className={classes.infoStyle}>
      <Typography variant="p" component="div">
        <Link component="a" href="./" color="white">
          About Us
        </Link>
      </Typography>
      <Typography variant="p" component="div">
        <Link component="a" href="./" color="white">
          Contact Us
        </Link>
      </Typography>
    </div>
  );
};

export default Info;
