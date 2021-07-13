import { makeStyles } from '@material-ui/styles';

const logoStyle = makeStyles({
  logo: {
    width: '4rem',
    height: '3rem',
    '@media( max-Width: 600px)': {
      width: '3rem',
      height: '2rem',
      position: 'absolute',
      top: '-2.3rem',
      left: '.5rem'
    }
  }
});

export default logoStyle;
