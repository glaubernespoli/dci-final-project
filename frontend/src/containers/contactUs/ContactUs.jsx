import { Grid, Typography } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import contactUs from './ContactUs.style';
import FeedBack from './FeedbackForm';
import ProfileCard from './ProfileCard';

const ContactUs = () => {
  const classes = contactUs();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} className={classes.paper}>
          <Typography
            variant="h3"
            color="secondary"
            fontWeight="bold"
            padding=".5rem 0"
            className={classes.header}
          >
            Contact Us
            <hr />
          </Typography>
          <Typography variant="h3" color="Primary" className={classes.icon1}>
            We would Love
            <span className={classes.span}>
              <FavoriteIcon />
            </span>
            to help !
          </Typography>
          <Typography variant="h4" color="white" className={classes.icon1}>
            We like to help || Open minded people || Fell free to say Hello !!
          </Typography>
          <Typography
            variant="h5"
            textAlign="justify"
            fontFamily="monospace"
            className={classes.icon1}
          >
            Music is a form of art that uses sound in time. Music is also a form of entertainment
            that puts sounds together in a way that people like, find interesting or dance to. Most
            music includes people singing with their voices or playing musical instruments, such as
            the piano, guitar, drums or violin. The word music comes from the Greek word, which
            means. In Ancient Greece the Muses included the goddesses of music.
          </Typography>
        </Grid>
      </Grid>
      {/* Feedback from customer side */}

      <div className={classes.feedback}>
        <Grid item xs={6}>
          <FeedBack />
        </Grid>
      </div>
      {/* ProfileCard begin here */}
      <Grid item xs={12}>
        <Typography variant="h2" align="center" className={classes.team} color="secondary">
          Our Team
        </Typography>
        <hr />
      </Grid>
      <div className={classes.cardHeader}>
        <ProfileCard
          name="Gluber Naspoli"
          designation="Full Stack Developer"
          img="https://picsum.photos/200/300?random=1"
          skills="JavaScript || React || NodeJs || MongoDB || BootStrap || Java || Sass || JQuery "
        />
        <ProfileCard
          name="Santiago Julian"
          designation="Front-End Developer"
          img="https://picsum.photos/200/300?random=2"
          skills="JavaScript || React || CSS|| HTML || BootStrap || Sass || JQuery || Materials UI"
        />
      </div>
      <div className={classes.cardHeader}>
        <ProfileCard
          name="Arifur Rahman Arif"
          designation="Web Developer"
          img="https://picsum.photos/200/300?random=3"
          skills="JavaScript || React || NodeJs || MongoDB || BootStrap || Sass || JQuery || ExpressJs"
        />
        <ProfileCard
          name="ManonMani Selvakumar"
          designation="Back-End Developer"
          img="https://picsum.photos/200/300?women"
          skills="JavaScript || React || NodeJs || MongoDB || BootStrap || Sass || JQuery || ExpressJs"
        />
      </div>

      {/* More Infos  */}

      <Grid item xs={12} spacing={6}>
        <div className={classes.foot1}>
          <Typography
            variant="h6"
            fontFamily="monospace"
            align="center"
            padding=".5rem"
            color="white"
          >
            <span className={classes.span}>More infos:</span>
            <br />
            <MailOutlineIcon className={classes.foot} />
            sellyoursRecords@gamil.com
            <br />
            <CallIcon className={classes.foot} />
            Mobile No:+4901234567890
          </Typography>
        </div>
      </Grid>
    </div>
  );
};
export default ContactUs;
