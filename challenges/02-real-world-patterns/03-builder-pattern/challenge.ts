// Type for the built query
export type Query<T> = {
  select?: Array<keyof T>;
  where?: Partial<T>;
  orderBy?: keyof T;
  limit?: number;
};

// TODO: Implement the QueryBuilder class
// It should support method chaining for building queries
// Each method should return 'this' to enable chaining
export class QueryBuilder<T> {
  private query: Query<T> = {};

  // TODO: Implement select method
  // Accept an array of field names (must be valid keys of T)
  // Return this for chaining
  select(fields: Array<keyof T>): this {
    // Your code here
    throw new Error('Not implemented');
  }

  // TODO: Implement where method
  // Accept partial object for filtering
  // Return this for chaining
  where(conditions: Partial<T>): this {
    // Your code here
    throw new Error('Not implemented');
  }

  // TODO: Implement orderBy method
  // Accept a field name to sort by
  // Return this for chaining
  orderBy(field: keyof T): this {
    // Your code here
    throw new Error('Not implemented');
  }

  // TODO: Implement limit method
  // Accept a number for max results
  // Return this for chaining
  limit(count: number): this {
    // Your code here
    throw new Error('Not implemented');
  }

  // TODO: Implement build method
  // Return the constructed query object
  build(): Query<T> {
    // Your code here
    throw new Error('Not implemented');
  }
}

// Example usage (for reference):
// type User = { id: number; name: string; email: string; role: string };
// const query = new QueryBuilder<User>()
//   .select(['id', 'name'])
//   .where({ role: 'admin' })
//   .orderBy('name')
//   .limit(10)
//   .build();
