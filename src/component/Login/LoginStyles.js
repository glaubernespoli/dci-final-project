import { makeStyles } from '@material-ui/core/styles';

const LoginStyles = makeStyles((theme) => ({
  mainDiv: {
    width: '32vw',
    margin: '2rem auto',
    padding: '2rem 3rem',
    boxShadow: '0 0 4px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  icon: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  textF: {
    margin: theme.spacing(1, 0)
  },
  typography: {
    margin: theme.spacing(3, 0),
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'center'
  }
}));

export default LoginStyles;
