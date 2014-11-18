
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
  // var tweet = yield Twitter.postTweet(params, error, success);
  // return tweet.id;
};

/**
 * Delete tweet.
 *
 * @param {String} tweetId
 */

Tweet.destroy = function *destroy(tweetId) {
  // Twitter.destroyTweet({ id: tweetId }, error, success);
};

/**
 * Expose `Tweet`
 */

module.exports = Tweet;
