import { WebsocketHandler } from "@fastify/websocket";

import logger from "../../../logger";
import { parseDirectionFromString } from "../helpers/parsers";
import { moveInDirection } from "./makeMovement";

// TODO: remove volatile memory object
let start = { top: 0, right: 0 };

const move: WebsocketHandler = function (connection, req) {
  const socketId = req.headers["sec-websocket-key"];

  connection.socket.on("message", (message) => {
    try {
      const direction = parseDirectionFromString(message);
      const updatedPosition = moveInDirection(direction, start);
      // TODO: add persistent layer call here
      start = updatedPosition;
      connection.socket.send(JSON.stringify(updatedPosition));
    } catch (err) {
      logger.warn(err);
      connection.socket.send(JSON.stringify(err));
    }
  });
};

export default move;
