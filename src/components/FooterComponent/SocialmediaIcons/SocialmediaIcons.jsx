import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import SocialLinks from '../../../assets/js/Footer/Social';
import useStyles from '../../../assets/js/Footer/socialmediaStyle';

const Socialmedia = () => {
  const classes = useStyles();

  return (
    <div className={classes.socialIconStyle}>
      <IconButton className={classes.menuButton} href={SocialLinks.pinterest}>
        <PinterestIcon />
      </IconButton>
      <IconButton className={classes.menuButton} href={SocialLinks.facebook}>
        <FacebookIcon />
      </IconButton>
      <IconButton className={classes.menuButton} href={SocialLinks.twitter}>
        <TwitterIcon />
      </IconButton>
      <IconButton className={classes.menuButton} href={SocialLinks.instagram}>
        <InstagramIcon />
      </IconButton>
    </div>
  );
};

export default Socialmedia;
