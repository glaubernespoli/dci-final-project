import { makeStyles } from '@material-ui/styles';
import gallery from '../../assets/img/AboutUs/gallery.jpg';
import headPhone from '../../assets/img/AboutUs/headPhone.jpg';
import vinyl from '../../assets/img/AboutUs/vinyl.jpg';

const useStyles = makeStyles({
  img3: {
    backgroundImage: `url(${vinyl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '800px'
  },
  img4: {
    backgroundImage: `url(${headPhone})`,
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

  sec2: {
    textAlign: 'center',
    color: '#666',
    borderRadius: '100px',
    background: 'linear-gradient(90deg, rgb(22, 21, 21) 20%, #3348 60%, #333 90%)',
    padding: '10px 30px',
    width: '90vw'

    // height: '25vh'
  },
  sec3: {
    backgroundColor: 'black',
    color: '#666',
    borderRadius: '100px',
    background: 'linear-gradient(90deg, #333 10%, #333 50%, #333 90%)',
    padding: '10px 30px'
  },

  infoContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  content: {
    fontSize: '1.3rem',
    color: '#666',
    fontStyle: 'italic',
    padding: '1.5rem'
  },
  imgContent: {
    flex: '50%',
    alignSelf: 'flex-start',
    backgroundImage: `url(${gallery})`,
    backgroundSize: '200px 200px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100px'
  }
});
export default useStyles;
