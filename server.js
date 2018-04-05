var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express();


app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
 
});

app.post('/upload', (req, res) => {

});

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
