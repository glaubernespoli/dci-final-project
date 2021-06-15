import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  paper: {
    marginTop: '8vh',
    marginBottom: '8vh'
  },
  typography: {
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingTop: '10vh',
    paddingBottom: '5vh'
  },
  container: {
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingTop: '5vh',
    paddingBottom: '10vh'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
});

export default useStyles;
