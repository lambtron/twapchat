
/**
 * Module dependencies.
 */

var Twitter = require('../lib/twitter');
var Bitly = require('../lib/bitly');

/**
 * Define `Tweet`.
 */

var Tweet = {};

/**
 * Send tweet.
 *
 * @param {Object} snap
 *
 * @return {String} tweetId
 */

Tweet.send = function *send(snap) {
  var urlString = yield Bitly.shortenLink('http://twapchat.herokuapp.com/snap/'
    + snap.id);
  var url = JSON.parse(urlString);
  var message = snap.message;
  if (message.length === 0)
    message = 'Check out this snap before it expires: ';
  var params = { status: message + ' ' + url.data.url };
  var tweet = yield Twitter.post('statuses/update', params);
  var tweetObj = JSON.parse(tweet);
  return tweetObj.id;
};

/**
 * Delete tweet.
 *
 * @param {Object} snap
 */

Tweet.destroy = function *destroy(snap) {
  console.log('destroying tweet..');
  console.log(snap.tweetId);
  Twitter.post('statuses/destroy', { id: snap.tweetId })(function(err, res) {
    console.log(err);
    console.log(res);
  });
};

/**
 * Expose `Tweet`
 */

module.exports = Tweet;
