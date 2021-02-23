import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  footerStyle: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
}));
export default useStyles;
