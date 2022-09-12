import 'dotenv/config';
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import multer from 'multer';
import dbInit from './db/init';
import routes from './api/routes';
import errorMiddleware from './middleware/error-middleware';

const port = process.env.PORT as string;
const app: Application = express();
const upload = multer();

dbInit();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.none());
app.use('/api/v1', routes);
app.use(errorMiddleware);
app.listen(port);
