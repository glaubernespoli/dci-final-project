import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import logger from 'morgan';
import adminRoutes from '../routes/adminRoutes.js';
import profileRoutes from '../routes/profileRoutes.js';
import recordRoutes from '../routes/recordsRoutes.js';

//create app
const app = express();

//Middlewares
app.use(helmet());
app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN_URL, process.env.ADMIN_ORIGIN_URL]
  })
);
app.use(logger('dev')); //TODO customize logger
app.use(express.json());

//routes
app.use('/record', recordRoutes);
app.use('/profile', profileRoutes);
app.use('/admin', adminRoutes);

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
