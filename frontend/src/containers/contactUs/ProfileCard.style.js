import { makeStyles } from '@material-ui/styles';

const ProfileCardStyles = makeStyles((theme) => ({
  span: {
    fontWeight: 'bold',
    color: 'Yellow',
    fontSize: '1.2rem'
  },
  card: {
    maxWidth: 350,
    margin: theme.spacing(1),
    padding: '.5rem',
    boxShadow: '0 0 3px black'
  },
  image: {
    padding: '.75rem',
    height: '200px',
    '@media(max-Width: 600px)': {
      height: '150px',
      padding: '.25rem'
    }
  }
}));

export default ProfileCardStyles;
