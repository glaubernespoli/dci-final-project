import { makeStyles } from '@material-ui/styles';

const InfoStyle = makeStyles(() => ({
  root: {
    padding: '12vw'
  },
  imagePhone: {
    width: '40vw',
    height: '60vh'
  },
  imagePhoneContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  imageIcon: {
    width: '30vw',
    height: '15vh'
  }
}));

export default InfoStyle;
