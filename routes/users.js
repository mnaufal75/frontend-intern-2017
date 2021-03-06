var express = require('express');
var request = require('request');
var router = express.Router();
var app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var url = "https://dev.prelo.id/api/me/lovelist"
  
  var header = {
    Authorization: "Token " + req.query.token
  }

  request({
    method: 'get',
    url: url,
    headers: header,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.render('lovelist', {
        data: body._data
      })
    } else {
      next(error);
    }
  })
});

router.post('/', function(req, res, next) {
  
});

module.exports = router;