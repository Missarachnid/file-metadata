const express = require('express');
const multer = require('multer');
const uploadfile = require('./models/fileSubmit');
const app = express();


app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/",  (req, res)  => {
 
});



// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
