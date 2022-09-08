import 'dotenv/config';
import express from 'express';

const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res) => res.send(PORT));

app.listen(PORT);