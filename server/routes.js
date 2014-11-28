
/**
 * Module dependencies.
 */

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
  if (!snap) return this.body = 'This snap no longer exists!';
  var views = --snap.views;
  Snaps.update({ id: id }, snap);
  yield render('snap', { snap: snap });
  if (views === 0) destroy(snap);
  this.body = 'OK';
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
    views: 20,
    tweetId: null,
    message: body.Body
  };
  snap.tweetId = yield Tweet.send(snap);
  yield Snaps.insert(snap);
  this.body = 'Your snap is tweeted! Check @twapchat to see.';
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

function destroy(snap) {
  Tweet.destroy(snap);
  Media.destroy(snap);
  Snaps.remove({ id: snap.id });
}
