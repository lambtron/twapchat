
/**
 * Module dependencies.
 */

var parse = require('co-body');
var render = require('../lib/render');

/**
 * Configure monk.
 */

var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/koaBlog');
var snaps = wrap(db.get('snaps'));

/**
 * Define routes
 */

var Routes = {};

/**
 * Render index html page.
 */

Routes.index = function *index() {
  this.body = yield render('index');
};

/**
 * Render page with snap given id.
 */

Routes.show = function *show() {
  // Decrement view in Snap.
  // If view = 0, delete tweet, snap.
  this.body = yield render('snap');
};

/**
 * Create a new snap.
 */

Routes.create = function *create() {
  // Save snap to Mongo.
  // Tweet it.
  var snap = yield parse(this);
  yield snaps.insert(snap);
  yield tweet(snap);
};

/**
 * Expose `Routes`.
 */

module.exports = Routes;
