import express from 'express';
import 'dotenv/config';

require('dotenv').config();

const app = express();
app.use(express.json());
app.listen(3333);

export default app;
