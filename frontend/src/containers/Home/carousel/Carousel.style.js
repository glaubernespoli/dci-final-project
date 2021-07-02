import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    height: '80vh'
  },
  container: {
    paddingTop: '1rem'
  },
  imageListItem: {
    width: '70vw'
  },
  imageItemContainer: {
    width: '80%',
    height: '70vh',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    objectFit: 'cover'
  }
});

export default useStyles;
