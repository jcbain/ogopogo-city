interface Position {
  top: number;
  right: number;
}

type Step = number;

type MakeMovement = (start: Position, vStep: Step, hStep: Step) => Position;
type Direction = "left" | "right" | "up" | "down";

export const makeMovement: MakeMovement = function (start, vStep, hStep) {
  const updated: Position = { ...start };
  updated.top = updated.top + vStep;
  updated.right = updated.right + hStep;

  return updated;
};

export const moveInDirection = function (
  direction: Direction,
  start: Position
): Position {
  switch (direction) {
    case "down":
      return makeMovement(start, -1, 0);
    case "up":
      return makeMovement(start, 1, 0);
    case "left":
      return makeMovement(start, 0, -1);
    case "right":
      return makeMovement(start, 0, 1);
    default:
      return start;
  }
};
