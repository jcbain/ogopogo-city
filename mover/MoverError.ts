interface ErrorCodes {
  "1001": string;
  [code: string]: string;
}

type code = string;
type message = string;
type details = string | unknown;

const errors: ErrorCodes = {
  "1001": "Invalid data provided. Expected to parse valid JSON",
  "1002": "Invalid data provided. Expected to convert buffer to string",
};

class MoverError extends Error {
  code: code;
  message: message;
  details?: details;

  constructor(code: code, details?: details) {
    super("MoverError");
    this.code = this.processError(code);
    this.message = errors[code] || "Server Error";
    this.details = this.processDetails(details);
  }

  processError(code: string): string {
    return errors[code] ? code : "1000";
  }

  processDetails(details: details): details {
    if (!details) {
      return details;
    }
    return JSON.stringify(details);
  }
}

export default MoverError;
