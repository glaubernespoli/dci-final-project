import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import contactUs from './ContactStyle';

const feedback = () => {
  const classes = contactUs();

  return (
    <Paper className={classes.paper}>
      <form className={classes.input} noValidate autoComplete="off">
        <div className={classes.input}>
          <Typography variant="h4" className={classes.team} color="white">
            Send Your message to us
          </Typography>
          <TextField
            id="filled-textarea"
            label="Your Name"
            placeholder="Enter Your Name"
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
  );
};

export default feedback;
