import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  imageItemContainer: {
    width: '80%',
    height: '70vh',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    objectFit: 'cover'
  },
  imageListItem: {
    width: '70vw'
  }
});

export default useStyles;
