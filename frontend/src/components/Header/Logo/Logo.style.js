import { makeStyles } from '@material-ui/styles';

const logoStyle = makeStyles({
  logo: {
    width: '4rem',
    height: '3rem',
    '@media( max-Width: 600px)': {
      position: 'absolute',
      top: '-2rem',
      left: '0rem',
      width: '3rem',
      height: '2rem'
    }
  }
});

export default logoStyle;
