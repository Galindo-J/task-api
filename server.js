
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public/dist/public')));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/client/views'));


//THIS LINKS MODEL.JS TO SERVER.JS
require('./server/config/mongoose');

// THIS LINKS ROUTES.JS TO SERVER.JS
require('./server/config/routes')(app);


// tell your server which port to run on
app.listen(8000, () => console.log("Listening on port 8000"));


