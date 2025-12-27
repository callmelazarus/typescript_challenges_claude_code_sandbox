// Type for observer callbacks
type Observer<T> = (data: T) => void;

// TODO: Implement EventEmitter class
// Should manage a list of observers and notify them when events occur
export class EventEmitter<T> {
  private observers: Observer<T>[] = [];

  // TODO: Add an observer to the list
  subscribe(callback: Observer<T>): void {
    // Your code here
    throw new Error('Not implemented');
  }

  // TODO: Remove an observer from the list
  unsubscribe(callback: Observer<T>): void {
    // Your code here
    throw new Error('Not implemented');
  }

  // TODO: Notify all observers with data
  emit(data: T): void {
    // Your code here
    throw new Error('Not implemented');
  }

  // Helper to get observer count (for testing)
  getObserverCount(): number {
    return this.observers.length;
  }
}

// TODO: Implement Stock class that emits price change events
export class Stock {
  private priceValue: number;
  private priceChanged: EventEmitter<{ symbol: string; oldPrice: number; newPrice: number }>;

  constructor(
    public symbol: string,
    initialPrice: number
  ) {
    this.priceValue = initialPrice;
    this.priceChanged = new EventEmitter();
  }

  get price(): number {
    return this.priceValue;
  }

  // TODO: Update price and emit event
  // Should emit an event with { symbol, oldPrice, newPrice }
  setPrice(newPrice: number): void {
    // Your code here
    throw new Error('Not implemented');
  }

  // TODO: Allow subscribing to price changes
  onPriceChange(callback: Observer<{ symbol: string; oldPrice: number; newPrice: number }>): void {
    // Your code here
    throw new Error('Not implemented');
  }

  // TODO: Allow unsubscribing from price changes
  offPriceChange(callback: Observer<{ symbol: string; oldPrice: number; newPrice: number }>): void {
    // Your code here
    throw new Error('Not implemented');
  }
}

// Advanced: Type-safe event emitter with multiple event types
type EventMap = Record<string, unknown>;

// TODO: Implement TypedEventEmitter
// Should support multiple event types, each with their own data type
export class TypedEventEmitter<Events extends EventMap> {
  private observers: {
    [K in keyof Events]?: Observer<Events[K]>[];
  } = {};

  // TODO: Subscribe to a specific event type
  // The callback should be typed based on the event name
  on<K extends keyof Events>(eventName: K, callback: Observer<Events[K]>): void {
    // Your code here
    throw new Error('Not implemented');
  }

  // TODO: Unsubscribe from a specific event type
  off<K extends keyof Events>(eventName: K, callback: Observer<Events[K]>): void {
    // Your code here
    throw new Error('Not implemented');
  }

  // TODO: Emit a specific event with typed data
  emit<K extends keyof Events>(eventName: K, data: Events[K]): void {
    // Your code here
    throw new Error('Not implemented');
  }
}
