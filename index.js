//API Hitting
var request = require('request');
var options = {
  url: 'https://api.github.com/users/sandeepinigithub',
  headers: {
    'User-Agent': 'request',
  },
};

function callback(error, response, body) {
  console.log(response.body)
}

request(options, callback);
