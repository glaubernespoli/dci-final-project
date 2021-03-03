import { makeStyles } from '@material-ui/core/styles';

const imgBackgroundStyles = makeStyles({
  img: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  },
  section: {
    textAlign: 'center'
  }
});
export default imgBackgroundStyles;
