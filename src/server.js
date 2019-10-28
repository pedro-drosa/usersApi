const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://myusername:mypassword@cluster0-mzspv.mongodb.net/usersapi?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
});

app.listen('8080',()=>{
    console.log('this server is running');
})