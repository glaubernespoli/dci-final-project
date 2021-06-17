import { makeStyles } from '@material-ui/styles';
import headPhone from '../../assets/img/AboutUs/headPhone.jpg';

const useStyles = makeStyles({
  img1: {
    backgroundImage: `url(${headPhone})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  txt: {
    textAlign: 'center',
    color: '#000',

    textTransform: 'uppercase'
  },
  border: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '20px',
    borderRadius: '50px',
    fontSize: '1.5rem',
    letterSpacing: '8px'
  },
  quote: {
    fontSize: '1rem',
    fontStyle: 'italic',
    fontFamily: 'cursive',
    textTransform: 'capitalize',
    letterSpacing: '3px'
  }
});
export default useStyles;
