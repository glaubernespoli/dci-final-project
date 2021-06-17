import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    marginTop: '8vh',
    marginBottom: '8vh',
    border: '1px solid black'
  },
  container: {
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingTop: '5vh',
    paddingBottom: '10vh'
  },
  imgContainer: {
    padding: '1rem'
  },
  img: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '5px',
    border: '3px solid #111'
  },
  albumInfo: {
    padding: '1rem'
  },
  description: {
    padding: '2rem'
  }
});

export default useStyles;
