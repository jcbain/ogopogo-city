import fastify from "fastify";

// types
import { BuildServer } from "../types/server";

export const buildServer: BuildServer = async function (opts) {
  const server = await fastify(opts);

  return server;
};
