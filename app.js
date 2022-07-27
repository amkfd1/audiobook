const http = require('http');
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// const audioRoutes = require("../routes/audios");
const port = process.env.PORT || 3030;
const app = express();


const server = http.createServer(app);

// const contentful = require('contentful');

const AudioRoutes = require('./routes/audios') 
const authRoutes = require('./routes/auth');
const MONGODB_URI =
    'mongodb+srv://adamahmad:Malammadorikfada123@cluster0.2svvk.mongodb.net/AUB'
 
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false })); 

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(AudioRoutes);
app.use(authRoutes);


mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3030);
    console.log("Sever up and running");
  })
  .catch(err => {
    console.log(err);
  });

// server.listen(port);
// console.log("Sever up and running");