var express = require('express'),
    multer = require('multer');
    upload = multer({ dest: '../uploads' });

var uploadRouter = express.Router();

// https://www.npmjs.com/package/multer
// http://stackoverflow.com/questions/31496100/cannot-app-usemulter-requires-middleware-function-error
uploadRouter.route('/')
.post(upload.any(), function(req, res, next) {
  console.log("Filesize : ", file);
});

module.exports = uploadRouter;
