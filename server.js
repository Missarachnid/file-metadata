const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

var upload = multer({ dest: 'uploads/' });
var app = express();


app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
 
});

app.post('/upload', upload.single('uploadFile'), (req, res) => {
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
