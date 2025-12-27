// Type definitions
export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  role: 'admin' | 'user';
};

export type UserSummary = Pick<User, 'id' | 'name'>;

export type Config = {
  apiUrl: string;
  timeout: number;
  retries: number;
  debug: boolean;
};

// TODO: Implement this function
// Take a user and partial updates, merge them together
export function updateUser(user: User, updates: Partial<User>): User {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this function
// Extract only id and name from a user object
export function getUserSummary(user: User): UserSummary {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this function
// Merge default config with overrides and ensure all fields are present
const defaultConfig: Config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
  debug: false,
};

export function createConfig(overrides: Partial<Config>): Required<Config> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this function
// Create an object where each status string becomes a key with a boolean value
// Example: ['pending', 'active'] => { pending: false, active: false }
export function createStatusMap(statuses: string[]): Record<string, boolean> {
  // Your code here
  throw new Error('Not implemented');
}
