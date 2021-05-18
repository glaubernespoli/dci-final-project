import 'dotenv/config';
import express from 'express';
import logger from 'morgan';

//create app
const app = express();

//Middlewares
app.use(logger('dev')); //TODO customize logger
app.use(express.json());

//routes

//Start server
//TODO set DB connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Application listening to port ${PORT}`);
  }
});
