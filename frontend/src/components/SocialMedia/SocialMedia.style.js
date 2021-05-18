import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  socialIconStyle: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    edge: 'start',
    ariaLabel: 'menu'
  }
}));
export default useStyles;
