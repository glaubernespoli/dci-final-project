import { makeStyles } from '@material-ui/core/styles';
import Img1 from '../Images/img1.jpg';

const useStyles = makeStyles({
  // root: {
  //   height: '100%',
  //   margin: '0',
  //   fontSize: '16px',
  //   fontFamily: 'Karla',
  //   lineHeight: '1.8em',
  //   fontWeight: '400',
  //   color: '#666',
  //   backgroundColor: '#000'
  // },
  img1: {
    backgroundImage: `url(${Img1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',

    backgroundAttachment: 'fixed'
  },
  section: {
    textAlign: 'center',
    padding: '50px 80px'
  },
  sec1: {
    /* background-color: #f4f4f4; */
    textAlign: 'center',
    backgroundColor: 'black',
    color: '#666',
    borderRadius: '100px',
    background: 'linear-gradient(90deg, #333 20%, #3333 40%, rgb(22, 21, 21) 90%)'
  },
  sample: {
    display: 'flex'
  },
  content: {
    flex: '50%',
    fontSize: '1rem'
  },
  imgContent: {
    flex: '50%',
    backgroundImage: `url(${Img1})`,

    backgroundSize: '200px 200px',
    backgroundRepeat: 'no-repeat',

    color: 'red'
  },
  txt: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    textAlign: 'center',
    color: '#000',
    fontSize: ' 27px',
    letterSpacing: '8px',
    textTransform: 'uppercase'
  },
  border: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '20px',
    borderRadius: '50px'
  },
  quote: {
    fontSize: '0.8rem',
    fontStyle: 'italic',
    fontFamily: 'cursive',
    textTransform: 'capitalize',
    letterSpacing: '3px'
  }
});
export default useStyles;
