
/**
 * Module dependencies.
 */

var monk = require('monk');
var wrap = require('co-monk');
var mongo = process.env.MONGOHQ_URL || 'mongodb://localhost/twapchat';
var db = monk(mongo);
var snaps = wrap(db.get('snaps'));

/**
 * Expose `snaps`.
 */

module.exports = snaps;
