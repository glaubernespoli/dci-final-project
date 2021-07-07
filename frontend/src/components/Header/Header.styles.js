import { makeStyles } from '@material-ui/styles';

const headerStyle = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media(max-Width:600px)': {
      // eslint-disable-next-line no-trailing-spaces
      display: 'flex',
      flexDirection: 'column'
    }
  }
});

export default headerStyle;
