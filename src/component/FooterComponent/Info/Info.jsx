import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  infoStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    color: 'red'
  }
}));

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
