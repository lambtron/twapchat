
/**
 * Module dependencies.
 */

var parse = require('co-body');
var render = require('../lib/render');
var Snaps = require('../lib/snaps');
var Tweet = require('./tweet');
var Media = require('./media');

/**
 * Define `Routes`.
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

Routes.show = function *show(id) {
  if (!id) this.throw(404, 'Did not provide snap id');
  var snap = yield Snaps.findOne({ id: id });
  if (!snap) this.throw(404, 'This snap no longer exists!');
  var views = --snap.views;
  Snaps.update({ id: id }, snap);
  if (views === 0) destroy(snap);
  this.body = yield render('snap', { snap: snap });
};

/**
 * Create a new snap.
 */

Routes.create = function *create() {
  if (!this.request.body) return;
  var body = this.request.body;
  var snap = {
    id: body.MessageSid,
    url: body.MediaUrl0,
    views: 10,
    tweetId: null
  };
  snap.tweetId = yield Tweet.send(snap);
  yield Snaps.insert(snap);
  this.body = 'Thanks for sending!';
};

/**
 * Expose `Routes`.
 */

module.exports = Routes;

/**
 * Destroy instances of snap.
 *
 * @param {object} snap
 */

function *destroy(snap) {
  yield Tweet.destroy(snap);
  yield Media.destroy(snap);
  yield Snaps.remove({ id: snap.id });
}