import { Router } from 'express';
import { RegisterController } from '../controllers/register.js';
import { ConsolidatedController } from '../controllers/consolidated.js';

export const router = Router();

const register = RegisterController;
const consolidated = ConsolidatedController;

/** Account Meter */
router.post('/api/register', register.create);
router.get('/api/register', register.readAll);
router.get('/api/register/:findbytitle', register.readByTitle);
router.put('/api/register/:id', register.update);
router.delete('/api/register/:id', register.delete);

/** Consolidated day Meters */

router.post('/api/consolidated', consolidated.create);
router.get('/api/consolidated', consolidated.readAll);
router.get('/api/consolidated/:findbytitle', consolidated.readByTitle);
router.put('/api/consolidated/:id', consolidated.update);
router.delete('/api/consolidated/:id', consolidated.delete);
