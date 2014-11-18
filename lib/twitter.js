
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
 * Expose Twitter client.
 */

module.exports = new Twitter(config);
