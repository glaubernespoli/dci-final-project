import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import SocialLinks from '../Links/Social';
import useStyles from './socialmediaStyle';

const Socialmedia = () => {
  const classes = useStyles();
  const { instagram, facebook, twitter, pinterest } = SocialLinks;

  return (
    <div className={classes.socialIconStyle}>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        href={pinterest}
      >
        <PinterestIcon />
      </IconButton>

      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        href={facebook}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        href={twitter}
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        href={instagram}
      >
        <InstagramIcon />
      </IconButton>
    </div>
  );
};

export default Socialmedia;
