require('dotenv/config');
require('./lib/mongoose');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const { APP_BASE_URL } = process.env;
const APP_PORT = process.env.PORT || 3000;

app.listen(`${APP_PORT}`, () => {
  console.log(`server is running on ${APP_BASE_URL}:${APP_PORT}`);
});
