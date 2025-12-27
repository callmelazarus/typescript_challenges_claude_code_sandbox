# Challenge 8: Factory Pattern

## Learning Goals
- Create objects without specifying exact classes
- Use factories to encapsulate object creation logic
- Implement type-safe factories with TypeScript
- Handle different creation strategies

## The Challenge

The Factory pattern provides an interface for creating objects. You'll build a notification system that creates different notification types:

1. **Create notification types**
   - `EmailNotification` - has recipient, subject, body
   - `SMSNotification` - has phoneNumber, message
   - `PushNotification` - has deviceId, title, body

2. **Implement `NotificationFactory`**
   - `createEmail(...)` creates EmailNotification
   - `createSMS(...)` creates SMSNotification
   - `createPush(...)` creates PushNotification

3. **Add a `send()` method**
   - Each notification type implements `send()`
   - Returns a string describing what was sent

4. **Create a type-safe factory function**
   - `createNotification(type, data)` that uses discriminated unions
   - Type `data` parameter based on the `type` parameter

## Why Use Factories?

Factories help when:
- Object creation is complex
- You need to abstract creation logic
- Different objects share a common interface
- You want to centralize object creation

## Run Tests
```bash
npm test 05-factory-pattern
```
