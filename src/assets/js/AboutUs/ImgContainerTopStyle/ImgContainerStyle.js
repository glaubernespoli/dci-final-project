import { makeStyles } from '@material-ui/core/styles';
import Img1 from '../../../img/AboutUs/img1.jpg';

const useStyles = makeStyles({
  img1: {
    backgroundImage: `url(${Img1})`,
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
