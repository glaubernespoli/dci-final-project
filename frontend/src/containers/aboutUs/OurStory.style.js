import { makeStyles } from '@material-ui/core/styles';
import guitar from '../../assets/img/AboutUs/guitar.jpg';
import ourStory from '../../assets/img/AboutUs/ourStory.jpg';

const useStyles = makeStyles({
  img2: {
    backgroundImage: `url(${guitar})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '800px'
  },
  sec1: {
    textAlign: 'center',
    color: '#666',
    borderRadius: '100px',
    background: 'linear-gradient(90deg, #333 20%, #3333 40%, rgb(22, 21, 21) 90%)',
    padding: '10px 30px',
    width: '90vw'
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
    backgroundImage: `url(${ourStory})`,
    backgroundSize: '200px 200px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100px'
  }
});
export default useStyles;
