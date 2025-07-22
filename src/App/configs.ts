export type ShapeType = 'circle' | 'square' | 'triangle';

export interface Shape {
  top: number;
  left: number;
  type: ShapeType,
}