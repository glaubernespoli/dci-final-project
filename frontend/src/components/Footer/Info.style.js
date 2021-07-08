import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  infoStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media(max-Width : 600px)': {
      display: 'flex',
      // flexDirection: 'row',
      justifyContent: 'left'
    }
  },
  link: {
    color: 'red'
  }
}));

export default useStyles;
