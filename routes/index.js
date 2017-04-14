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

  var body = {
    username_or_email: req.body.username_or_email,
    password: req.body.password
  }

  request({
    method: 'post',
    url: url,
    body: body,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
    	//app.locals.username = 'asdasd';
    	app.locals.token = body._data.token;
    	token = body._data.token;
    	console.log(token);
      res.redirect('/users');
    } else {
      next(error);
    }
  })
})

module.exports = router;
