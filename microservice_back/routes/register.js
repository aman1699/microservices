const express = require('express');
const mysqlConnection = require('../server');
const router = express.Router();
const multer = require('multer');
const path=require('path')
const shortid = require('shortid');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
})
const upload = multer({ storage })
router.post('/micro',upload.single('file'),(req,res)=>{
  var name = req.body.name;
  var email = req.body.email;
  var file = req.file.filename;
 // var sql = "INSERT INTO login VALUES?";
 // var values = [['null', email, password]];
  //mysqlConnection.query(sql,(err,result)=>{
  mysqlConnection.query(`INSERT INTO micro VALUES("${name}","${email}","${file}")`, (err, result) => {
      if (!err) {
          res.status(200).send("Data inserted successfuly");

      } else{
          res.send(err)
  }

  })
})


module.exports = router;