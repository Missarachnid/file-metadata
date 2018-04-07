const express = require('express');
const multer = require('multer');
const upload = multer();
const app = express();


app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/",  (req, res)  => {
 
});

app.post('/uploadFile', upload.single('userFile'), (req, res) => {
  console.log(req.userFile);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
