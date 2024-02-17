const express = require('express');
const app = express();
const helmet = require('helmet');
const bcrypt = require('bcrypt');

commented to use the helmet's middleware, passing single configuration object
app.use(helmet.hidePoweredBy())

// disable webpage to be rendered in external frames 
app.use(helmet.frameguard({action: 'deny'}))

app.use(helmet.xssFilter())
app.use(helmet.noSniff())
app.use(helmet.ieNoOpen())


ninetyDaysInSeconds = 90*24*60*60;
hstsConfig = {maxAge: ninetyDaysInSeconds, force: true}
// app.use(helmet.hsts(hstsConfig))

// dns prefatch controll 
app.use(helmet.dnsPrefetchControl())

// disable client cache, comment if client cache is required
app.use(helmet.noCache())

// list of allowed sources to load scripts, stylesheets, fonts, frames, media,
directives = {defaultSrc: ["'self'"], scriptSrc: ["'self'", 'trusted-cdn.com']}

// set Content security policy
// protect app from XSS vulnerabilities, undesired tracking, malicious frames etc.
app.use(helmet.contentSecurityPolicy({directives: directives}))




























module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
