class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}
class ValidationError extends AppError {
    constructor(message) {
        super(message, 400);
    }
}
class AuthError extends AppError {
    constructor(message) {
        super(message, 401);
    }
}
module.exports = { AppError, ValidationError, AuthError };