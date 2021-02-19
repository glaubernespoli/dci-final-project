import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  tool: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  orange: {
    padding: '.5rem',
    margin: '0 .5rem 0 0',
    color: 'red',
    backgroundColor: 'black',
  },
});

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.tool}>
      <Avatar className={classes.orange}>SYR</Avatar>
      <h3>Sell-Your-Records</h3>
    </div>
  );
};

export default Logo;
