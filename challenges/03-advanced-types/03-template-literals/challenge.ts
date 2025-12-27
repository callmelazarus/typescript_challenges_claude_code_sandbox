// TODO: Implement Greeting type
// Should create "Hello, {Name}!" string
// Hint: `Hello, ${Name}!`
export type Greeting<Name extends string> = unknown; // Replace 'unknown'

// TODO: Implement HTTPMethod type
// Combine methods with "/api" prefix
// Should result in: "GET /api" | "POST /api" | "PUT /api" | "DELETE /api"
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type HTTPMethod = unknown; // Replace 'unknown'

// TODO: Implement EventName type
// Convert type name to event format
// Example: "user" → "onUser" | "onUserChange"
// Hint: Use Capitalize and template literals
export type EventName<T extends string> = unknown; // Replace 'unknown'

// TODO: Implement CSSProperty type
// Create CSS property string: "property: value"
// Example: CSSProperty<"color", "red"> → "color: red"
export type CSSProperty<Property extends string, Value extends string> = unknown; // Replace 'unknown'

// TODO: Implement SnakeToCamel type (Advanced!)
// Convert snake_case to camelCase
// Example: "hello_world" → "helloWorld"
// Hint: Use infer, conditional types, and Capitalize
// This is a recursive type!
export type SnakeToCamel<S extends string> = unknown; // Replace 'unknown'

// Built-in intrinsic string manipulation types (for reference)
// You don't need to implement these - TypeScript provides them

export type MyUppercase<S extends string> = Uppercase<S>;
export type MyLowercase<S extends string> = Lowercase<S>;
export type MyCapitalize<S extends string> = Capitalize<S>;
export type MyUncapitalize<S extends string> = Uncapitalize<S>;

// TODO: Implement createEventHandler function
// Should return event handler name in format: "on{CapitalizedEvent}"
// Example: createEventHandler("click") → "onClick"
// The return type should use template literals
export function createEventHandler<Event extends string>(
  name: Event
): `on${Capitalize<Event>}` {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement buildRoute function
// Combine base path with route
// Example: buildRoute("api", "users") → "/api/users"
export function buildRoute<Base extends string, Route extends string>(
  base: Base,
  route: Route
): `/${Base}/${Route}` {
  // Your code here
  throw new Error('Not implemented');
}

// Advanced: Create a type for CSS color properties
// Should support: "color: red", "background-color: blue", etc.
type CSSColorProperty = 'color' | 'background-color' | 'border-color';
type CSSColor = 'red' | 'blue' | 'green' | 'yellow';
export type CSSColorValue = `${CSSColorProperty}: ${CSSColor}`;
