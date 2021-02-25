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

export default useStyles;
