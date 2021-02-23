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
    right: '11rem',
    top: '1rem'
  },
  logo: {
    margin: theme.spacing(1, 2)
  }
}));

export default useStyles;
