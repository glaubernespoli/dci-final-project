import { makeStyles } from '@material-ui/core/styles';
import Img2 from '../../Images/img2.jpg';
import Img4 from '../../Images/img5.jpg';

const useStyles = makeStyles({
  img2: {
    backgroundImage: `url(${Img2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '700px',
    display: 'flex'
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
    width: '90vw',
    height: '25vh'
  },

  infoContainer: {
    display: 'flex'
  },
  content: {
    // flex: '50%',
    fontSize: '1.3rem',

    fontStyle: 'italic',
    padding: '1.5rem'
  },
  imgContent: {
    flex: '50%',
    alignSelf: 'flex-start',
    backgroundImage: `url(${Img4})`,
    backgroundSize: '200px 200px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100px'
  }
});
export default useStyles;
