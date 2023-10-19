const mongoose = require('mongoose');

mongoose
  .connect(`${process.env.MONGO_DB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongodb database is connected');
  })
  .catch((error) => {
    console.log(error, 'mongodb database is disconnected');
  });
