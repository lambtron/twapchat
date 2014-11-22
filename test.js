
var Bitly = require('./lib/bitly');

Bitly
  .shortenLink('https://github.com/tanepiper/node-bitly')(function(err, response) {
  if (err) throw err;

  var resObj = JSON.parse(response);
  console.log(resObj.data.url);


  // See http://code.google.com/p/bitly-api/wiki/ApiDocumentation for format of returned object
  // var short_url = response.data.url;

  // Do something with data
});

