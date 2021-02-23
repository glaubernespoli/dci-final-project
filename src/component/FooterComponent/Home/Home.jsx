import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import SocialLinks from '../Links/Social';
import useStyles from './homeStyle';

const Home = () => {
  const classes = useStyles();
  const { homepage } = SocialLinks;

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        href={homepage}
      >
        <HomeIcon />
      </IconButton>
    </div>
  );
};

export default Home;
