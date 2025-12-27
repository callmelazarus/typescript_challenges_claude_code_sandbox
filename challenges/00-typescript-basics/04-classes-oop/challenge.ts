// TODO: Implement Person class
export class Person {
  // Your code here
  constructor(public name: string, public age: number) {}

  greet(): string {
    throw new Error('Not implemented');
  }

  haveBirthday(): void {
    throw new Error('Not implemented');
  }
}

// TODO: Implement BankAccount class with private balance
export class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    throw new Error('Not implemented');
  }

  withdraw(amount: number): boolean {
    throw new Error('Not implemented');
  }

  getBalance(): number {
    throw new Error('Not implemented');
  }
}

// TODO: Implement Animal base class
export class Animal {
  constructor(public name: string) {}

  speak(): string {
    throw new Error('Not implemented');
  }
}

// TODO: Implement Dog class that extends Animal
export class Dog extends Animal {
  speak(): string {
    throw new Error('Not implemented');
  }
}

// TODO: Implement MathUtils with static methods
export class MathUtils {
  static PI = 3.14159;

  static add(a: number, b: number): number {
    throw new Error('Not implemented');
  }

  static multiply(a: number, b: number): number {
    throw new Error('Not implemented');
  }
}
