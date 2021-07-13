import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    marginTop: '8vh',
    marginBottom: '8vh',
    border: '1px solid black',
    '@media(max-Width: 600px)': {
      margin: '5vh 0'
    }
  },
  mediaQueryButton: {
    '@media(max-Width: 600px)': {
      fontSize: '.8rem'
    }
  },
  mediaQueryFont: {
    '@media(max-Width: 600px)': {
      fontSize: '1rem'
    }
  },
  container: {
    width: '70vw',
    margin: '0 auto',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingTop: '5vh',
    paddingBottom: '10vh',
    '@media(max-Width: 600px)': {
      padding: '0',
      fontSize: '1rem'
    }
  },
  imgContainer: {
    padding: '1rem'
  },
  img: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '5px',
    border: '3px solid #111',
    height: '350px',
    '@media(max-Width: 600px)': {
      border: '1px solid #111',
      height: '200px'
    }
  },
  albumInfo: {
    padding: '1rem'
  },
  description: {
    padding: '2rem'
  }
});

export default useStyles;
