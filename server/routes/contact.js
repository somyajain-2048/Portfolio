import express from 'express';
import { sendMessage, getContactHealth } from '../controllers/contactController.js';
import { validateContactInput } from '../middleware/validator.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// POST /api/contact — with rate limiting and input validation
router.post('/', contactRateLimiter, validateContactInput, sendMessage);

// GET /api/contact/health — health check endpoint
router.get('/health', getContactHealth);

export default router;
