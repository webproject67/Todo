import 'dotenv/config';
import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import dbInit from './db/init';
import routes from './api/routes';

const port = process.env.PORT as string;
const app: Application = express();
const upload = multer();

dbInit();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.none());
app.use('/api/v1', routes);
app.listen(port);
