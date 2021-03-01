import { makeStyles } from '@material-ui/core/styles';

const InfoStyle = makeStyles((theme) => ({
  root: {
    minHeight: '80vh',
    margin: theme.spacing(1, 0, 5, 0),
    padding: '1rem'
  },
  info: {
    padding: '1rem',
    margin: theme.spacing(20, 0),
    fontWeight: 'bold'
  }
}));

export default InfoStyle;
