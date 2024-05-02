// Define an error handler middleware function
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    
    // Send an error response
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message // You can customize the error message as needed
    });
  };
  
  // Export the error handler middleware function
  export default errorHandler;
  