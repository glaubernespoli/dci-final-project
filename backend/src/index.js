import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import logger from 'morgan';
import profileRouter from '../routes/profileRouter.js';
import recordRouter from '../routes/recordsRoutes.js';

//create app
const app = express();

//Middlewares
app.use(helmet());
app.use(cors());
app.use(logger('dev')); //TODO customize logger
app.use(express.json());
app.use(cors());

//routes
app.use('/record', recordRouter);
app.use('/profile', profileRouter);

//Start server
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
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
