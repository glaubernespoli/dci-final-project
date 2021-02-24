import { makeStyles } from '@material-ui/core/styles';

const ContactUsStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
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
    margin: theme.spacing(2, 4),
    backgroundColor: 'black'
  },
  content: {
    margin: theme.spacing(5, 3),
    padding: '.7rem 1rem',
    fontFamily: 'monospace'
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    // margin: theme.spacing(1, 3)
  },
  icon1: {
    margin: theme.spacing(2)
  }
}));

export default ContactUsStyles;
