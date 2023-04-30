"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _registerjs = require('../controllers/register.js');
var _consolidatedjs = require('../controllers/consolidated.js');

 const router = _express.Router.call(void 0, ); exports.router = router;

const register = _registerjs.RegisterController;
const consolidated = _consolidatedjs.ConsolidatedController;

/** Account Meter */
exports.router.post('/api/register', register.create);
exports.router.get('/api/register', register.readAll);
exports.router.get('/api/register/:findbytitle', register.readByTitle);
exports.router.put('/api/register/:id', register.update);
exports.router.delete('/api/register/:id', register.delete);

/** Consolidated day Meters */

exports.router.post('/api/consolidated', consolidated.create);
exports.router.get('/api/consolidated', consolidated.readAll);
exports.router.get('/api/consolidated/:findbytitle', consolidated.readByTitle);
exports.router.put('/api/consolidated/:id', consolidated.update);
exports.router.delete('/api/consolidated/:id', consolidated.delete);
