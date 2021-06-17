import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import recordRouter from '../routes/recordsRoutes.js';
import auth from './middleware/auth.js';

//create app
const app = express();

//Middlewares
app.use(auth);
app.use(logger('dev')); //TODO customize logger
app.use(express.json());

//routes
app.use('/record', recordRouter);

//Start server
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(
      `Application successfuly connected to the mongodb database at [${process.env.MONGODB_URL}]!`
    );
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, (err) => {
      if (err) {
        //TODO use the loger
        console.log(err);
      } else {
        console.log(`Application listening to port ${PORT}`);
      }
    });
  })
  .catch((err) => {
    //TODO use the loger
    console.log(err);
  });
