
/**
 * Module dependencies.
 */

var monk = require('monk');
var wrap = require('co-monk');
var db = monk(process.env.MONGOHQ_URL || 'mongodb://localhost/twapchat');
var snaps = wrap(db.get('snaps'));

/**
 * Expose `snaps`.
 */

module.exports = snaps;
