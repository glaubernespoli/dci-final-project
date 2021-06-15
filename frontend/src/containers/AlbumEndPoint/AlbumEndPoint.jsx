import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import useStyles from './Album.Styles';

const AlbumEndPoint = () => {
  const classes = useStyles();
  const { item } = useContext(MyContext);

  return (
    <>
      <Paper elevation={5} className={classes.paper}>
        <Card>
          <Grid container className={classes.container}>
            <Grid item xs={12} md={6} className={classes.imgContainer}>
              <CardMedia
                className={classes.img}
                component="img"
                alt={item.subtitle}
                height="350"
                image={item.img}
                title={item.title}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.albumInfo}>
              <CardContent>
                <Typography variant="h3" component="div">
                  {item.author}
                </Typography>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="h6" component="div">
                  Label:
                  {item.label}
                </Typography>
                <Typography variant="h6" component="div">
                  Published Date:
                  {item.date_of_publish}
                </Typography>
                <Typography variant="h6" component="div">
                  Country:
                  {item.country}
                </Typography>
                <Typography variant="h6" component="div">
                  Format:
                  {item.format}
                </Typography>
                <Typography variant="h6" component="div">
                  Style:
                  {item.style}
                </Typography>
                <Typography variant="h6" component="div">
                  {item.price}
                </Typography>

                <Button variant="outlined" endIcon={<AddShoppingCartIcon />}>
                  ADD TO SHOPPING CART
                </Button>
              </CardContent>
            </Grid>

            <Grid item xs={12} className={classes.description}>
              <Typography variant="subtitle1" component="div">
                {item.description}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Paper>
    </>
  );
};

export default AlbumEndPoint;
