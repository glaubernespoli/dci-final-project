import { makeStyles } from '@material-ui/styles';

const FeedbacFormStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2)
  },

  team: {
    padding: '1.5rem',
    fontWeight: 'bold',
    margin: theme.spacing(2, 0),
    fontFamily: 'monospace',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  }
}));

export default FeedbacFormStyles;
