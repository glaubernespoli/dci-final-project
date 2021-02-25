import { makeStyles } from '@material-ui/core/styles';
import Img2 from '../../Images/img2.jpg';
import Img4 from '../../Images/img5.jpg';

const useStyles = makeStyles({
  img2: {
    backgroundImage: `url(${Img2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    backgroundAttachment: 'fixed',
    minHeight: '700px'
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
    bottom: '0',
    padding: '3rem'
  },

  infoContainer: {
    display: 'flex'
  },
  content: {
    flex: '50%',
    fontSize: '1rem',
    minHeight: '100px'
  },
  imgContent: {
    flex: '50%',
    alignSelf: 'flex-start',
    backgroundImage: `url(${Img4})`,
    backgroundSize: '200px 200px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'

    // '&:hover': {
    //   opacity: '.7'
    // }
  }
});
export default useStyles;
