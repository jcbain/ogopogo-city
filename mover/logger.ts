import log, { LoggerOptions, Logger } from "pino";

const createLogger = function (
  level: string = "info",
  opts?: LoggerOptions
): Logger {
  return log({ level, ...opts });
};

const logger = createLogger("info", {
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "HH:MM:ss Z",
      ignore: "pid,hostname",
    },
  },
});

export default logger;
