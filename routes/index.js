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
    if (bodies.username_or_email.length < 4 || bodies.password.length < 6) {
    	res.send("username kurang dari 4 karakter atau password kurang dari 6 karakter");
    } else if (!error && response.statusCode === 200) {
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
