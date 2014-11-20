
/**
 * Module dependencies.
 */

var parse = require('co-body');
var render = require('../lib/render');
var Tweet = require('./tweet');
var Snaps = require('../lib/snaps');

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
  if (views === 0) {
    // yield Tweet.destroy(snap);
    // yield Twilio.destroy(snap);
    yield Snaps.remove({ id: id });
  };

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
  this.body = 'Thank you for your submission.';
};

/**
 * Expose `Routes`.
 */

module.exports = Routes;
