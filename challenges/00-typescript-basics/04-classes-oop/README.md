# Challenge 0.4: Classes & OOP Basics

## Learning Goals
- Create classes with properties and methods
- Use constructors and this keyword
- Implement inheritance with extends
- Understand public, private, and protected modifiers
- Use static methods and properties

## The Challenge

1. **Create a `Person` class**
   - Constructor with `name` and `age` parameters
   - Method `greet()` that returns "Hello, I'm {name}"
   - Method `haveBirthday()` that increments age

2. **Create a `BankAccount` class**
   - Private `balance` property
   - Methods: `deposit(amount)`, `withdraw(amount)`, `getBalance()`
   - Withdraw should fail if insufficient funds

3. **Create `Animal` and `Dog` classes (inheritance)**
   - Animal has `name` property and `speak()` method
   - Dog extends Animal and overrides `speak()` to return "Woof!"

4. **Create a `MathUtils` class with static methods**
   - Static method `add(a, b)`
   - Static method `multiply(a, b)`
   - Static property `PI = 3.14159`

## Run Tests
```bash
npm test 04-classes-oop
```
