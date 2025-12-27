// TODO: Define the Coffee interface
// Should have cost() and description() methods
export interface Coffee {
  cost(): number;
  description(): string;
}

// TODO: Implement SimpleCoffee
// cost() returns 2
// description() returns "Simple coffee"
export class SimpleCoffee implements Coffee {
  cost(): number {
    // Your code here
    throw new Error('Not implemented');
  }

  description(): string {
    // Your code here
    throw new Error('Not implemented');
  }
}

// TODO: Implement MilkDecorator
// Wraps a Coffee and adds milk
// Adds $0.50 to cost
// Adds "milk" to description (e.g., "Simple coffee, milk")
export class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    // Your code here
    throw new Error('Not implemented');
  }

  description(): string {
    // Your code here
    throw new Error('Not implemented');
  }
}

// TODO: Implement SugarDecorator
// Wraps a Coffee and adds sugar
// Adds $0.25 to cost
// Adds "sugar" to description (e.g., "Simple coffee, sugar")
export class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    // Your code here
    throw new Error('Not implemented');
  }

  description(): string {
    // Your code here
    throw new Error('Not implemented');
  }
}

// TODO: Implement WhipDecorator
// Wraps a Coffee and adds whipped cream
// Adds $0.75 to cost
// Adds "whip" to description (e.g., "Simple coffee, whip")
export class WhipDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    // Your code here
    throw new Error('Not implemented');
  }

  description(): string {
    // Your code here
    throw new Error('Not implemented');
  }
}
