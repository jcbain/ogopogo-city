import { version } from "../../package.json";
// types
import { Handler } from "../../types/handlers";

export const getStatus: Handler = function (req, reply) {
  reply.send(`version: ${version}\nstatus OK`);
};
