import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  infoStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media(max-Width : 600px)': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80vw',
      padding: '.5rem 0'
    }
  },
  link: {
    color: 'red'
  }
}));

export default useStyles;
