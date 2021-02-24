import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './text';

export default function Aboutus() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.img1}>
        <div className={classes.txt}>
          <Typography variant="overline" className={classes.border}>
            -- About Us --.
            <Typography variant="overline" className={classes.quote}>
              Music is the universal language of Mankind
            </Typography>
          </Typography>
        </div>
        <section className={(classes.section, classes.sec1)}>
          <h2> Section</h2>
          <div className={classes.sample}>
            <div className={classes.imgContent}>img </div>
            <div className={classes.content}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quas voluptas
                minima error natus! Eligendi velit quam exercitationem dolorum, id unde hic quas
                dolore recusandae et accusantium pariatur, aspernatur magnam, quaerat magni
                explicabo consequatur repudiandae voluptatibus error? Aliquid, eveniet sapiente?
                Ipsum deserunt dignissimos nesciunt voluptatibus nisi rem, ut nam accusantium.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
