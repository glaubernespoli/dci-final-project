import { makeStyles } from '@material-ui/core/styles';

const HederStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  root: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));
export default HederStyles;
