
  import app from "./src/middleware/appRouteMiddlewares.js";
  import ENV from "./src/config/keys.js";
  import DB from "./src/config/db.js";
  import AppRoutes from "./src/routes/index.js";
  import errorHandler from "./src/utils/Errorhandler.js";

  app.use("/api/v1/", AppRoutes);


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

  app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${ENV.PORT}`);
    DB();
  });
