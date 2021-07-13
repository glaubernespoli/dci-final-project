import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 150;

const HeaderMobileStyles = makeStyles((theme) => ({
  mobileAppBar: {
    '@media (max-Width : 600px)': {
      height: 115
    }
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    position: 'absolute',
    top: '3.5rem',
    '@media (min-Width :601px)': {
      display: 'none'
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
    },
    '@media (max-Width :600px)': {
      position: 'absolute',
      top: '3.5rem',
      right: '.3rem'
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

export default HeaderMobileStyles;
