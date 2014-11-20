
/**
 * Module dependencies.
 */

var Twitter = require('../lib/twitter.js');

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
  var params = {
    status: 'Check this out before it\'s gone: '
      + 'http://twapchat.herokuapp.com/snap/'
      + snap.id
  };
  var tweet = yield Twitter.post('statuses/update', params);
  var tweetObj = JSON.parse(tweet);
  return tweetObj.id;
};

/**
 * Delete tweet.
 *
 * @param {String} tweetId
 */

Tweet.destroy = function *destroy(tweetId) {
  Twitter.post('statuses/destroy/' + tweetId, { id: tweetId });
};

/**
 * Expose `Tweet`
 */

module.exports = Tweet;
