import { makeStyles } from '@material-ui/core/styles';

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
    marginBottom: '3rem',
    paddingTop: '5vh',
    paddingBottom: '10vh'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  /*    content_Align: {
    display: 'flex'
  },
 */
  paginationBttns: {
    width: '100%',
    height: '2rem',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    '& a': {
      padding: '10px',
      margin: '8px',
      borderRadius: '5px',
      border: '1px solid #2b2eff',
      color: '#2b2eff',
      cursor: 'pointer',
      '& :hover': {
        color: 'white',
        backgroundColor: '#2b2eff'
      }
    }
  },
  paginationActive: {
    '& a': {
      color: 'white',
      backgroundColor: '#2b2eff'
    }
  }
});

export default useStyles;
