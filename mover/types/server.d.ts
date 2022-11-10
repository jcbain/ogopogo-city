import { FastifyInstance, FastifyServerOptions } from "fastify";

export type BuildServer = (
  opts?: FastifyServerOptions
) => Promise<FastifyInstance>;
