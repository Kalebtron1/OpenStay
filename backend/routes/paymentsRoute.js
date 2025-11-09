import express from 'express';
import { startPayment, finishPayment } from '../controlador/openpayments.js';

const router = express.Router();

router.post('/start', startPayment);
router.post('/finish', finishPayment);

export default router;