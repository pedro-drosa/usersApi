const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

const { MONGO_URI, APP_BASE_URL } = process.env;

mongoose.connect(`${MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const APP_PORT = process.env.PORT || 3000;

app.listen(`${APP_PORT}`, () => {
  console.log(`server is running on ${APP_BASE_URL}:${APP_PORT}`);
});
