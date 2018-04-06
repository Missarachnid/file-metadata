const express = require('express');
const multer = require('multer');
const uploadfile = require('./models/fileSubmit');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
const multerUpload = multer({
  storage: storage
});
 
const uploadUserFile = multerUpload.single('fileSized');
const app = express();


app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/",  (req, res)  => {
 
});

app.post('/upload', (req, res) => {
  uploadUserFile(req, res, (err) => {
    if(err){
      console.log(err);
    }
    
    console.log(req);
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
