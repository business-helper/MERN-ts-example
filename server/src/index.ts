import dotenv from 'dotenv';
import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import * as routes from './routes';
import * as mongoConnection from './config/mongoConnection';

// initialize configuration.
dotenv.config();

const app = express();
app.use(json());
app.use(cors());

const port = process.env.SERVER_PORT || 8080;

mongoConnection.connect();

routes.register(app);

app.listen(port, () => {
  console.log(`[Server] started at http://localhost:${port}`);
});
