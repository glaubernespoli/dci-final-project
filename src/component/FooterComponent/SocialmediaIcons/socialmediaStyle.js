import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  socialIconStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    edge: 'start',
    color: 'inherit',
    ariaLabel: 'menu'
  }
}));
export default useStyles;
