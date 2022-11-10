import { RawData } from "ws";
import MoverError from "../../../MoverError";

type Direction = "left" | "right" | "up" | "down";

export const parseObjectFromBuffer = function (buffer: RawData): string {
  if (!Buffer.isBuffer(buffer)) {
    throw new MoverError("1001");
  }

  const stringMessage = buffer.toString();

  try {
    return JSON.parse(stringMessage);
  } catch (err) {
    throw new MoverError("1001", err);
  }
};

export const parseDirectionFromString = function (buffer: RawData): Direction {
  const direction = buffer.toString();
  try {
    if (
      direction === "up" ||
      direction === "left" ||
      direction === "right" ||
      direction === "down"
    ) {
      return direction;
    }
    throw new MoverError("1010");
  } catch (err) {
    throw err;
  }
};
