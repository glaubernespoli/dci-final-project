import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import React from 'react';
import contactUs from './ContactStyle';

const ContactUs = () => {
  const classes = contactUs();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={1} />
        <Grid item xs={10} className={classes.paper}>
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
        <Grid item xs={1} />

        <Grid item xs={3} />
        <Grid item xs={6} textAlign="center">
          <Paper className={classes.paper}>
            <form className={classes.input} noValidate autoComplete="off">
              <div className={classes.input}>
                <TextField
                  id="filled-textarea"
                  label="Your Name"
                  placeholder="Enter Your Name"
                  multiline
                  variant="standard"
                  className={classes.input}
                />
                <TextField
                  id="filled-textarea"
                  label="Your Email Address"
                  placeholder="Enter Your Email"
                  multiline
                  variant="standard"
                  className={classes.input}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="standard"
                  className={classes.input}
                />
                <Button variant="contained" color="primary" className={classes.input}>
                  Submit
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={3} />

        {/* For Our Team */}

        <Grid item xs={12} align="center">
          <Paper>
            <Typography
              variant="h3"
              padding="1rem"
              color="secondary"
              fontWeight="bold"
              className={classes.header}
            >
              Our Team
            </Typography>
          </Paper>
        </Grid>
        <div className={classes.cardHeader}>
          <Grid xs={3} wrap>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="G"
                  height="220"
                  image="https://picsum.photos/200/300?random=1"
                  className={classes.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <span className={classes.span1}>Glauber Nespoli</span>
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    Full-Stack Developer
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    <h6>
                      Java || JavaScript || React || NodeJs || MongoDB || BootStrap || Sass ||
                      JQuery ||
                    </h6>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="S"
                  height="220"
                  image="https://picsum.photos/200/300?random=2"
                  className={classes.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <span className={classes.span1}>Santago Julian</span>
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    Front-End Developer
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    <h6>JavaScript || React || CSS3 || BootStrap || Sass || JQuery ||HTML5</h6>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="M"
                  height="220"
                  image="https://picsum.photos/200/300?random=3"
                  className={classes.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <span className={classes.span1}>Manonmani Selvakumar</span>
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    Front-End Developer
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    <h6>JavaScript || React || NodeJs || BootStrap || Sass || JQuery || HTML5</h6>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="220"
                  image="https://picsum.photos/200/300?random=4"
                  className={classes.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <span className={classes.span1}>Arifur Rahman Arif</span>
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    Web Developer
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    <h6>
                      JavaScript || React || NodeJs || BootStrap || Sass || JQuery || HTML5 || CSS3
                    </h6>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12}>
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
