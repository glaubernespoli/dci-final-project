import { makeStyles } from '@material-ui/core/styles';

const LoginStyles = makeStyles((theme) => ({
  mainDiv: {
    width: '34vw',
    margin: '2rem auto',
    padding: '2em 2rem',
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
  },
  btn: {
    fontSize: '.6rem',
    color: 'gold'
  }
}));

export default LoginStyles;
