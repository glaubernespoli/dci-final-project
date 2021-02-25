import { makeStyles } from '@material-ui/core/styles';

const ContactUsStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2)
  },
  content: {
    margin: theme.spacing(5, 3),
    padding: '.7rem 1rem',
    fontFamily: 'monospace'
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1, 3)
  },
  icon1: {
    margin: theme.spacing(2)
  },
  foot: {
    margin: theme.spacing(0, 2)
  },
  foot1: {
    boxShadow: '0 0 2px',
    borderRadius: '.2rem',
    padding: '.5rem'
  },
  span: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: '1.2rem',
    margin: theme.spacing(0, 2)
  },
  card: {
    maxWidth: 300,
    margin: theme.spacing(1)
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem'
  },
  header: {
    letterSpacing: '1px',
    textTransform: 'uppercase'
  }
}));

export default ContactUsStyles;
