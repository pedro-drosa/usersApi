const express = require('express');
const routes = require('./routes');
require('dotenv/config');
require('./lib/mongoose');

const app = express();

app.use(express.json());
app.use(routes);

export default app;
