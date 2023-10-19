require('dotenv/config');
const { app } = require('./app');

const { APP_BASE_URL } = process.env;
const APP_PORT = process.env.PORT || 3000;

app.listen(`${APP_PORT}`, () => {
  console.log(`server is running on ${APP_BASE_URL}:${APP_PORT}`);
});
