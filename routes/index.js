var express = require('express'),
    multer = require('multer');

var router = express.Router();

// https://codeforgeek.com/2014/11/file-uploads-using-node-js/
// declare Multer storage
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads');
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + '_' + Date.now()); // Make file name unique
}
});

var upload = multer({ storage: storage }).single('userFile');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Express' });
})

.post('/api/fileanalyse', function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      return res.status(404).end("Error uploading file.");
    }
    console.log("req.file : ", req.file," - req.body : ", req.body);
    res.send({ filename: req.file.filename, size: req.file.size });
  });
});

module.exports = router;
