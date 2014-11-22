
/**
 * Module dependencies.
 */

var thunkify = require('thunkify-wrap');
var Twilio = require('twilio');

/**
 * Twilio credentials
 */

var ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || '';
var AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || '';

/**
 * Expose thunkified Twitter client.
 */

module.exports = thunkify(Twilio(ACCOUNT_SID, AUTH_TOKEN));
