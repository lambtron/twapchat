
/**
 * Module dependencies.
 */

var logger = require('koa-logger');
var route = require('koa-route');
var koa = require('koa');
var PORT = process.env.PORT || 3000;

/**
 * Expose `app`.
 */

module.exports = app = koa();

/**
 * Middleware.
 */

app.use(logger());

/**
 * Configure routes.
 */

var routes = require('./server/routes.js');
app.use(route.get('/', routes.index));
app.use(route.get('/snap/:id', routes.show));
app.use(route.post('/api/snap', routes.create));

/**
 * Listen on PORT.
 */

app.listen(PORT);
console.log('listening on port ' + PORT);
