import { makeStyles } from '@material-ui/styles';

const shoppingCartItemStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    '@media(max-Width:600px)': {
      fontSize: '.8rem',
      fontWeight: 'bold'
    }
  },
  btn: {
    '@media(max-Width:600px)': {
      display: 'flex'
    }
  },
  avatar: {
    '@media(max-Width:600px)': {
      display: 'none'
    }
  },
  priceDetails: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  },
  h1: {
    textAlign: 'center',
    '@media(max-Width:600px)': {
      fontSize: '1.2rem'
    }
  },
  h3: {
    textAlign: 'center',
    '@media(max-Width:600px)': {
      fontSize: '.9rem'
    }
  },
  ty: {
    display: 'flex',
    '@media(max-Width:600px)': {
      fontSize: '.8rem'
    }
  },
  emptyCart: {
    height: '80vh',
    '@media(max-Width:600px)': {
      height: '45vh'
    }
  }
});
export default shoppingCartItemStyles;
