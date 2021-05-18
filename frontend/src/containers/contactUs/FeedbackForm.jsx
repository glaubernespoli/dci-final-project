import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import FeedbackFormStyle from './FeedbackForm.style';

const FeedbackForm = () => {
  const classes = FeedbackFormStyle();
  return (
    <Paper className={classes.paper}>
      <form className={classes.input} noValidate autoComplete="off">
        <div className={classes.input}>
          <Typography variant="h4" className={classes.team} color="white">
            Send us Your message
          </Typography>
          <TextField
            id="filled-textarea"
            label="Your Name"
            variant="standard"
            className={classes.input}
          />
          <TextField
            id="filled-textarea"
            label="Your Email Address"
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
  );
};

export default FeedbackForm;
