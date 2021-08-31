import dotenv from 'dotenv';
import express from 'express';

import * as routes from './routes';

// initialize configuration.
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8080;

routes.register(app);

app.get('/ping', (req, res) => {
  return res.send('Pong');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
