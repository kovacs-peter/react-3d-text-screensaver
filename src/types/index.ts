export enum Direction {
  clockwise = -1,
  counterClockwise = 1,
}

export type TextProperties = {
  direction: Direction;
  rotationSpeed: number;
  position: { x: number; y: number; z: number };
  size: number;
  height: number;
};
