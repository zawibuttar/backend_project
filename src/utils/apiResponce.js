class apiResponce {
  constructor(statusCode, data, message = "Message") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}
