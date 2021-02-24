import { makeStyles } from '@material-ui/core/styles';
import Img1 from '../Images/img1.jpg';
import Img2 from '../Images/img2.jpg';
import Img3 from '../Images/img3.jpg';
import Img5 from '../Images/img4.jpg';
import Img4 from '../Images/img5.jpg';

const useStyles = makeStyles({
  img1: {
    backgroundImage: `url(${Img1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundAttachment: 'fixed'
  },

  img2: {
    backgroundImage: `url(${Img2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    backgroundAttachment: 'fixed',
    minHeight: '700px'
  },
  img3: {
    backgroundImage: `url(${Img3})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    backgroundAttachment: 'fixed',
    minHeight: '800px'
  },
  img4: {
    backgroundImage: `url(${Img1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    backgroundAttachment: 'fixed',
    minHeight: '800px'
  },
  section: {
    textAlign: 'center'
  },
  sec1: {
    textAlign: 'center',
    backgroundColor: 'black',
    color: '#666',
    borderRadius: '80px',
    background: 'linear-gradient(90deg, #333 20%, #3333 40%, rgb(22, 21, 21) 90%)',
    position: 'absolute',
    bottom: '0'
  },
  sec2: {
    color: '#666',
    borderRadius: '100px',
    // background: 'linear-gradient(90deg, rgb(22, 21, 21) 10%,#333 30%, #3333 90%)',
    background: 'linear-gradient(90deg, rgb(22, 21, 21) 20%, #3348 60%, #333 90%)',
    padding: '10px 30px'
  },
  sec3: {
    backgroundColor: 'black',
    color: '#666',
    borderRadius: '100px',
    background: 'linear-gradient(90deg, #333 10%, #333 50%, #333 90%)',
    padding: '10px 30px'
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
    alignSelf: 'flex-start',
    backgroundImage: `url(${Img4})`,
    backgroundSize: '200px 200px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100px'
    // '&:hover': {
    //   opacity: '.7'
    // }
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
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgGallery: {
    backgroundImage: `url(${Img5})`,
    marginTop: '3rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    width: '30vw',
    height: '30vh',
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'cursive',
    borderRadius: '20px',
    '&:hover': {
      opacity: '.7'
    }
  }
});
export default useStyles;
