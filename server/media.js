
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

Media.destroy = function destroy(snap) {
  var mediaId = snap.url.substring(snap.url.lastIndexOf('/') + 1);
  Twilio.messages(snap.id).media(mediaId).delete();
};

/**
 * Expose `Twilio`.
 */

module.exports = Media;
