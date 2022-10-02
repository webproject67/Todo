import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import multer from 'multer';
import dbInit from './db/init';
import routes from './api/routes';
import errorMiddleware from './middleware/error-middleware';

const app = express();
const upload = multer();

dbInit();

app.use(cors({
  credentials: true,
  origin: process.env.URL_CLIENT
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.none());
app.use('/api/v1', routes);
app.use(errorMiddleware);

app.listen(process.env.PORT);
