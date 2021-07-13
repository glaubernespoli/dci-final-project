import { makeStyles } from '@material-ui/styles';

const ContactUsStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  content: {
    margin: theme.spacing(5, 3),
    padding: '.7rem 1rem',
    fontFamily: 'monospace'
  },

  icon1: {
    margin: theme.spacing(2),
    '@media(max-Width : 600px)': {
      fontSize: '1rem'
    }
  },
  foot: {
    padding: '0 1rem',
    '@media(max-Width : 600px)': {
      fontSize: '.8rem'
    }
  },
  foot1: {
    boxShadow: '0 0 1px',
    borderRadius: '.1rem',
    padding: '.5rem',
    textAlign: 'center',
    '@media(max-Width : 600px)': {
      boxShadow: 'none'
    }
  },
  span: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: '1.2rem',
    margin: theme.spacing(0, 2)
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '.5rem',
    '@media(max-Width : 600px)': {
      display: 'flex',
      flexDirection: 'column',
      padding: '0'
    }
  },
  header: {
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: theme.spacing(1, 0),
    '@media(max-Width : 600px)': {
      fontSize: '1.5rem'
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
      fontSize: '1.5rem'
    }
  },
  feedback: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media(max-Width : 600px)': {
      display: 'flex',
      justifyContent: 'left',
      width: '50vw'
    }
  }
}));

export default ContactUsStyles;
