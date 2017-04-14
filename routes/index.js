var express = require('express');
var request = require('request');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	var url = "https://dev.prelo.id/api/auth/login";

  var bodies = {
    username_or_email: req.body.username_or_email,
    password: req.body.password
  }

  request({
    method: 'post',
    url: url,
    body: bodies,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
    	var token = body._data.token;
      res.redirect('/users/?token=' + token);
    } else {
      next(error);
    }
  })
})

module.exports = router;
