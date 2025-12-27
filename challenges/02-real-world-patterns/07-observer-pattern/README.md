# Challenge 10: Observer Pattern

## Learning Goals
- Implement publish-subscribe (pub/sub) pattern
- Notify multiple observers of state changes
- Manage subscriptions and unsubscriptions
- Type-safe event handling with generics

## The Challenge

The Observer pattern lets objects subscribe to events and get notified when they occur. You'll build an event system:

1. **Create `EventEmitter<T>` class**
   - `subscribe(callback)` - add an observer
   - `unsubscribe(callback)` - remove an observer
   - `emit(data)` - notify all observers with data

2. **Implement type-safe events**
   - Use generics to type the event data
   - Ensure callbacks receive correctly typed data

3. **Create a `Stock` class that uses events**
   - Has a `price` property
   - Emits `priceChanged` event when price updates
   - Observers can subscribe to price changes

4. **Support multiple event types**
   - Create `TypedEventEmitter<Events>` where Events is an object type
   - Each key is an event name, value is the event data type
   - Type-safe `on()` and `emit()` methods

## Real-World Use Cases

- UI frameworks (React, Vue, Angular events)
- WebSocket message handling
- Stock price updates
- User activity tracking
- Pub/Sub messaging systems

## Why Observer Pattern?

- Loose coupling between components
- Components don't need to know about each other
- Easy to add new observers without modifying subjects
- Foundation of reactive programming

## Run Tests
```bash
npm test 07-observer-pattern
```
