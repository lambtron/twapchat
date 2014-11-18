
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

Tweet.delete = function *delete(tweetId) {
  Twitter.destroyTweet({ id: tweetId }, error, success);
};

/**
 * Expose `Tweet`
 */

module.exports = Tweet;

/**
 * Helper function to print error.
 */

function error(err, response, body) {
  console.log('ERROR [%s]', err);
};

/**
 * Helper function to print success.
 */

function success(data) {
  console.log('Data [%s]', data);
};
