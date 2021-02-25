import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    bottom: 0
  },

  footerStyle: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
}));
export default useStyles;
