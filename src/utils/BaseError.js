//E:\React Native\Fyp\modelNetServer\src\utils\BaseError.js

class BaseError extends Error {
  static name;
  static httpCode;
  static isOperational;
  static description;

  constructor(name, httpCode, description, isOperational) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);

      this.name = name;
      this.httpCode = httpCode;
      this.isOperational = isOperational;
      this.description = description;

      Error.captureStackTrace(this);
  }
}

export default BaseError;
