
/**
 * Module dependencies.
 */

var Twitter = require('../lib/twitter');

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
    status: snap.message + ' '
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
 * @param {Object} snap
 */

Tweet.destroy = function *destroy(snap) {
  Twitter.post('statuses/destroy/' + snap.tweetId + '.json',
    { id: snap.tweetId });
};

/**
 * Expose `Tweet`
 */

module.exports = Tweet;
