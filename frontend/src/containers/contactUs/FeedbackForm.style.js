import { makeStyles } from '@material-ui/styles';

const FeedbacFormStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '@media(max-Width : 600px)': {
      width: '85vw',
      padding: theme.spacing(0)
    }
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
    '@media(max-Width : 600px)': {
      width: '80vw',
      margin: theme.spacing(0),
      padding: '.3rem',
      fontSize: '.7rem'
    }
  },

  team: {
    padding: '1.5rem',
    fontWeight: 'bold',
    margin: theme.spacing(2, 0),
    fontFamily: 'monospace',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    '@media(max-Width : 600px)': {
      padding: '.5rem',
      margin: theme.spacing(0, 0),
      fontSize: '1rem'
    }
  }
}));

export default FeedbacFormStyles;
