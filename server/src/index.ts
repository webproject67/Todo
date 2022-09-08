import 'dotenv/config';
import express from 'express';
import dbInit from './db/init';

const port = process.env.PORT;
const app = express();

app.get('/', (req, res) => res.send(port));

const start = async () => {
  try {
    await dbInit();
    app.listen(port);
  } catch (e) {
    console.log(e)
  }
}

start()
