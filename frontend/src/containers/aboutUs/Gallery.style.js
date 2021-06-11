import { makeStyles } from '@material-ui/styles';
import gallery from '../../assets/img/AboutUs/gallery.jpg';
import headPhone from '../../assets/img/AboutUs/headPhone.jpg';

const useStyles = makeStyles({
  img4: {
    backgroundImage: `url(${headPhone})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '800px'
  },
  section: {
    textAlign: 'center'
  },

  sec3: {
    backgroundColor: 'black',
    color: '#666',
    borderRadius: '100px',
    background: 'linear-gradient(90deg, #333 10%, #333 50%, #333 90%)',
    padding: '10px 30px'
  },

  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgGallery: {
    backgroundImage: `url(${gallery})`,
    marginTop: '3rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'black',
    width: '30vw',
    height: '30vh',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    borderRadius: '20px',
    '&:hover': {
      opacity: '.7',
      transform: 'scale(.8)'
    }
  }
});
export default useStyles;
