// src/routes/installationForm.js

import express from 'express';
import submitInstallationForm from '../controllers/installationForm.js';
import tokenAuthorization from '../middleware/tokenAuthorization.js';

const router = express.Router();

router.post('/', tokenAuthorization, submitInstallationForm);

export default router;
