import express from 'express';
import config from './src/config/keys.js';
import DB from './src/config/db.js';
import AppRoutes from './src/routes/index.js';
import errorHandler from './src/utils/Errorhandler.js';

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Middleware to handle routes
app.use('/api/v1/', AppRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (!errorHandler.isTrustedError(err)) {
    next(err);
  }
  errorHandler.handleError(err);
  return res.status(err?.httpCode ?? 500).json({
    name: err.name,
    status: err?.httpCode ?? 500,
    success: false,
    error: true,
    message: err?.message,
    errorId: err.errorId,
    values: err?.values,
  });
});

// Start the server and connect to the database
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
  DB();
});
