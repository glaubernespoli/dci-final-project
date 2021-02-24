import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Google, Instagram, WhatsApp } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PanToolIcon from '@material-ui/icons/PanTool';
import React from 'react';
import contactUs from './ContactStyle';

const ContactUs = () => {
  const classes = contactUs();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h2" color="secondary">
              ContactUs
            </Typography>
            <hr />
            <Typography variant="h4" color="Primary">
              We would Love
              <FavoriteIcon />
              to help !
            </Typography>
            <Typography variant="h5" color="white">
              We would Like to help, open minded people, Fell free to say Hallo!!
              <PanToolIcon />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <form className={classes.inpt} noValidate autoComplete="off">
              <div className={classes.inpt}>
                <TextField
                  id="filled-textarea"
                  label="Your Name"
                  placeholder="Enter Your Name"
                  multiline
                  variant="standard"
                  className={classes.inpt}
                />
                <TextField
                  id="filled-textarea"
                  label="Your Email Address"
                  placeholder="Enter Your Email"
                  multiline
                  variant="standard"
                  className={classes.inpt}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="standard"
                  className={classes.inpt}
                />
                <Button variant="outlined" color="primary" className={classes.inpt}>
                  Submit
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className={classes.inpt}>
              <Typography variant="h5">Address : Berlinier Straße 200, Belrin, Germany</Typography>
              <Typography variant="h5" className={classes.content}>
                Mobile No : +4901712341548
              </Typography>
              <Typography variant="h5">Email : sellyoursrecodrs@gmail.com</Typography>
            </div>
            <div className={classes.icon}>
              <Button variant="outlined" color="inherit" className={classes.icon1}>
                <FacebookIcon />
              </Button>
              <Button variant="outlined" color="inherit" className={classes.icon1}>
                <Instagram />
              </Button>
              <Button variant="outlined" color="inherit" className={classes.icon1}>
                <WhatsApp />
              </Button>
              <Button variant="outlined" color="inherit" className={classes.icon1}>
                <Google />
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default ContactUs;
