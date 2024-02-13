class apiError extends Error {
  constructor(
    statusCode,
    message = "Something Went Wrong",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = flase;
    this.errors = errors;
    if (stack) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructer);
    }
  }
}

export { apiError };
