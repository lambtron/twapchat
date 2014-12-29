
/**
 * Module dependencies.
 */

var Twilio = require('twilio');

/**
 * Twilio credentials
 */

var ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
var AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

/**
 * Expose thunkified Twilio client.
 */

module.exports = Twilio(ACCOUNT_SID, AUTH_TOKEN);
