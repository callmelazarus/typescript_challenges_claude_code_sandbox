import { describe, it, expect } from 'vitest';
import { Person, BankAccount, Animal, Dog, MathUtils } from './challenge';

describe('Challenge 0.4: Classes & OOP Basics', () => {
  describe('Person', () => {
    it('should create person with name and age', () => {
      const person = new Person('Alice', 25);
      expect(person.name).toBe('Alice');
      expect(person.age).toBe(25);
    });

    it('should greet', () => {
      const person = new Person('Bob', 30);
      expect(person.greet()).toBe("Hello, I'm Bob");
    });

    it('should increment age on birthday', () => {
      const person = new Person('Charlie', 20);
      person.haveBirthday();
      expect(person.age).toBe(21);
    });
  });

  describe('BankAccount', () => {
    it('should deposit money', () => {
      const account = new BankAccount();
      account.deposit(100);
      expect(account.getBalance()).toBe(100);
    });

    it('should withdraw money', () => {
      const account = new BankAccount();
      account.deposit(100);
      const success = account.withdraw(50);
      expect(success).toBe(true);
      expect(account.getBalance()).toBe(50);
    });

    it('should fail to withdraw with insufficient funds', () => {
      const account = new BankAccount();
      account.deposit(50);
      const success = account.withdraw(100);
      expect(success).toBe(false);
      expect(account.getBalance()).toBe(50);
    });
  });

  describe('Animal and Dog', () => {
    it('should create animal with name', () => {
      const animal = new Animal('Generic');
      expect(animal.name).toBe('Generic');
    });

    it('should make dog speak', () => {
      const dog = new Dog('Buddy');
      expect(dog.speak()).toBe('Woof!');
      expect(dog.name).toBe('Buddy');
    });
  });

  describe('MathUtils', () => {
    it('should have PI constant', () => {
      expect(MathUtils.PI).toBe(3.14159);
    });

    it('should add numbers', () => {
      expect(MathUtils.add(2, 3)).toBe(5);
    });

    it('should multiply numbers', () => {
      expect(MathUtils.multiply(4, 5)).toBe(20);
    });
  });
});
