import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '3rem'
  },
  imageItemContainer: {
    width: '75vh',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #555 '
  },
  imageContainer: {
    width: '100%',
    height: '75vh'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
});

export default useStyles;
