// TODO: Implement using parameter destructuring
export function getFullName({ firstName, lastName }: { firstName: string; lastName: string }): string {
  throw new Error('Not implemented');
}

// TODO: Destructure age from user object
export function getAge(user: { age: number }): number {
  throw new Error('Not implemented');
}

// TODO: Use default values in destructuring
export function getDefaults({ name, age = 18 }: { name: string; age?: number }) {
  throw new Error('Not implemented');
}

// TODO: Merge objects using spread operator
export function mergeObjects(obj1: object, obj2: object): object {
  throw new Error('Not implemented');
}

// TODO: Add property without mutating original
export function addProperty(obj: object, key: string, value: any): object {
  throw new Error('Not implemented');
}

// TODO: Merge updates into user
export function updateUser(
  user: { name: string; age: number },
  updates: Partial<{ name: string; age: number }>
) {
  throw new Error('Not implemented');
}

// TODO: Use Object.keys()
export function getKeys(obj: object): string[] {
  throw new Error('Not implemented');
}

// TODO: Use Object.values()
export function getValues(obj: object): any[] {
  throw new Error('Not implemented');
}

// TODO: Use Object.entries()
export function objectToArray(obj: Record<string, any>): [string, any][] {
  throw new Error('Not implemented');
}

// TODO: Count properties
export function countProperties(obj: object): number {
  throw new Error('Not implemented');
}
