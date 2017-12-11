var express = require('express');
var Info = require('../models/info');
var router = express.Router();

/* GET home page. */
router.get('/message', function(req, res) {
  Info.find({}, function(err,infos){
    if(err){
      res.send('somthing wrong');
    }

      res.render('message', {
        infos: infos
      });
  });
});


router.get('/delete/:id', function(req, res){
  Info.remove({_id:req.params.id}, function(err,delData){
    res.redirect('/message');
  });
});

router.get('/', function(req, res){
  res.render('index');
});

// router.get('/submit', function(req, res){
//   res.redirect('submit');
// });

router.post('/submit', function(req, res, next){
//  console.log(req.body);
  Info.create(req.body).then((info)=>{
    console.log(info);
    res.render('submit');
//tumi dorio na
  });
});
//owto data paiso ba
//database post oito
module.exports = router;
