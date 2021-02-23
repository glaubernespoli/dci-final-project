import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tool: {
    display: 'flex',
    justifyContent: 'space-around'
  },

  search: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
      color: 'white'
    }
  },
  searchIcon: {
    position: 'absolute',
    right: '10rem',
    top: '1rem'
  },
  logo: {
    margin: theme.spacing(2)
  }
}));

export default useStyles;
