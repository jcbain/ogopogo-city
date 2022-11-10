import fastifyWS from "@fastify/websocket";

import { buildServer } from "./src/server";
import { getStatus } from "./src/handlers/status";
import move from "./src/handlers/move";
import logger from "./logger";

const port = 4000;

const opts = {
  logger,
};

(async (): Promise<void> => {
  const server = await buildServer(opts);

  await server.register(fastifyWS, {
    errorHandler: (error, connection) => {
      logger.warn(error);
      connection.destroy(error);
    },
  });

  server.get("/move", { websocket: true }, move);

  server.get("/_status", getStatus);

  server.setErrorHandler((error, request, reply) => {
    logger.warn(error);
    reply.send(error);
  });

  server.listen({ port, host: "0.0.0.0" });
})();
