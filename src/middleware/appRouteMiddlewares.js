//middleware/appRouteMiddlewares.js

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

// Middleware
app.use(morgan(":method :url :status - :response-time ms - :res[content-length]"));
app.use(cors()); // Allow all origins by default
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(helmet()); // Adds security headers

// middleware/appRouteMiddlewares.js
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (!errorHandler.isTrustedError(err)) {
    errorHandler.handleError(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
  return res.status(err.httpCode).json({ error: err.message });
});


// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

export default app;
