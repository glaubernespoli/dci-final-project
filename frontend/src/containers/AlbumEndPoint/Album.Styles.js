import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    marginTop: '8vh',
    marginBottom: '8vh',
    paddingTop: '10vh',
    border: '1px solid #999',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '65vw'
  },
  img: {
    width: '95%',
    height: '95%',
    objectFit: 'contain'
  },
  description: {
    padding: '2rem'
  }
});

export default useStyles;
