"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _appjs = require('./app.js'); var _appjs2 = _interopRequireDefault(_appjs);
require('dotenv/config');

const APPNAME = 'App Express';
const PORT = process.env.SRV_PORT || 80;
const URL = process.env.HOST || 'localhost';
const testMessage = `${APPNAME} Server running at http://${URL}:${PORT}/`;

_appjs2.default.listen(PORT, () => console.log(testMessage));
