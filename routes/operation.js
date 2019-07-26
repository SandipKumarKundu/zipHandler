var express = require('express');
var router = express.Router();

var path = require('path')
var multer = require('multer');

// var storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads')
//   },
//   filename: function (req, file, callback) {
//     console.log(file);
//     callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// });


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/upload', function (req, res) {
 
  console.log();
  var upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, './uploads')
      },
      filename: function (req, file, callback) {
        console.log(file);
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
    })
  }).single('userFile')


  upload(req, res, function (err) {
    res.end('File is uploaded')
  })



});


module.exports = router;
