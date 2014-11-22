
/**
 * Module dependencies.
 */

var Twilio = require('../lib/twilio.js');

/**
 * Define `Twilio`.
 */

var Media = {};

/**
 * Delete media.
 *
 * @param {Object} snap
 */

Media.destroy = function *destroy(snap) {
  Twilio.media(snap.id).delete();
};

/**
 * Expose `Twilio`
 */

module.exports = Media;
