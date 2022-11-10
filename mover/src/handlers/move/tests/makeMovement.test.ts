import { makeMovement } from "../makeMovement";

describe("makeMovement", () => {
  it("should increase right by 1 if hStep=1", () => {
    const start = { top: 0, right: 0 };
    const expected = { top: 0, right: 1 };

    const actual = makeMovement(start, 0, 1);
    expect(actual).toEqual(expected);
  });

  it("should increase top by 1 if vStep=1", () => {
    const start = { top: 0, right: 0 };
    const expected = { top: 1, right: 0 };

    const actual = makeMovement(start, 1, 0);
    expect(actual).toEqual(expected);
  });
});
