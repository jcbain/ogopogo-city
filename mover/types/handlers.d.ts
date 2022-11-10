import { FastifyRequest, FastifyReply } from "fastify";

export type Handler = (req: FastifyRequest, reply: FastifyReply) => void;
export type AsyncHandler = (
  req: FastifyRequest,
  reply: FastifyReply
) => Promise<any>;
