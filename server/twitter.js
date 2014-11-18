
/**
 * Module dependencies.
 */

var Twitter = require('twitter-js-client').Twitter;

/**
 * Twitter credentials
 */

var config = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY || '',
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET || '',
  accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY || '',
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '',
  callBackUrl: 'http://twapchat.herokuapp.com'
};

/**
 * Setup Twitter client.
 */

var twitter = new Twitter(config);

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
  // var tweet = yield twitter.postTweet(params, error, success);
  // return tweet.id;
};

/**
 * Delete tweet.
 *
 * @param {String} tweetId
 */

Tweet.delete = function *delete(tweetId) {
  twitter.destroyTweet({ id: tweetId }, error, success);
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
