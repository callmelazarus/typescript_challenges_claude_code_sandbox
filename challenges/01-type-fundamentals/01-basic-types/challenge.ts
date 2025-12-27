// Type definitions for shapes
export type Circle = {
  kind: 'circle';
  radius: number;
};

export type Rectangle = {
  kind: 'rectangle';
  width: number;
  height: number;
};

export type Shape = Circle | Rectangle;

// Type definitions for results
export type Success = {
  success: true;
  data: string;
};

export type Failure = {
  success: false;
  error: string;
};

export type Result = Success | Failure;

// TODO: Implement this function
// If the value is a number, return it doubled as a string
// If the value is a string, return it uppercased
export function processValue(value: string | number): string {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this function
// Calculate the area based on the shape type
// Circle area: π * r²
// Rectangle area: width * height
export function getArea(shape: Shape): number {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this function
// Return a formatted message based on whether the result is a success or failure
// Success: "Success: {data}"
// Failure: "Error: {error}"
export function formatResult(result: Result): string {
  // Your code here
  throw new Error('Not implemented');
}
