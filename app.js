"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _nodepath = require('node:path'); var _nodepath2 = _interopRequireDefault(_nodepath);
var _ejs = require('ejs'); var _ejs2 = _interopRequireDefault(_ejs);
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _swaggerjs = require('./docs/swagger.js');
var _indexjs = require('./routes/index.js');

const app = _express2.default.call(void 0, );
app.use(_express2.default.json());

app.use(_cors2.default.call(void 0, {
  origin: '*'
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api-docs", _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(_swaggerjs.swaggerConfig))

const OPTIONS = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['css', 'html', 'js'],
  index: false,
  maxAge: '1d',
  redirect: false,
}

app.disable('x-powered-by');

// this way u can use html.
app.engine('.html', _ejs2.default.__express);
app.set('view engine', 'html');

app.set('views', _nodepath2.default.join('./src/views'));

app.use(_express2.default.static('./src/public', OPTIONS));

app.use(_indexjs.router);

app.get('', function (request, response) {
  response.render('index', {title: 'Olá mundo!', text: 'novo'});
});

app.get('/', function (request, response) {
  response.send('Server on');
});

exports. default = app;
