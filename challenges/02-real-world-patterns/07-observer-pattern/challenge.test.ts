import { describe, it, expect, vi } from 'vitest';
import { EventEmitter, Stock, TypedEventEmitter } from './challenge';

describe('Challenge 10: Observer Pattern', () => {
  describe('EventEmitter', () => {
    it('should notify subscribers when event is emitted', () => {
      const emitter = new EventEmitter<string>();
      const callback = vi.fn();

      emitter.subscribe(callback);
      emitter.emit('test event');

      expect(callback).toHaveBeenCalledWith('test event');
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should notify multiple subscribers', () => {
      const emitter = new EventEmitter<number>();
      const callback1 = vi.fn();
      const callback2 = vi.fn();

      emitter.subscribe(callback1);
      emitter.subscribe(callback2);
      emitter.emit(42);

      expect(callback1).toHaveBeenCalledWith(42);
      expect(callback2).toHaveBeenCalledWith(42);
    });

    it('should stop notifying after unsubscribe', () => {
      const emitter = new EventEmitter<string>();
      const callback = vi.fn();

      emitter.subscribe(callback);
      emitter.emit('first');
      emitter.unsubscribe(callback);
      emitter.emit('second');

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith('first');
    });

    it('should handle multiple emissions', () => {
      const emitter = new EventEmitter<number>();
      const callback = vi.fn();

      emitter.subscribe(callback);
      emitter.emit(1);
      emitter.emit(2);
      emitter.emit(3);

      expect(callback).toHaveBeenCalledTimes(3);
    });

    it('should track observer count', () => {
      const emitter = new EventEmitter<string>();
      const cb1 = vi.fn();
      const cb2 = vi.fn();

      expect(emitter.getObserverCount()).toBe(0);
      emitter.subscribe(cb1);
      expect(emitter.getObserverCount()).toBe(1);
      emitter.subscribe(cb2);
      expect(emitter.getObserverCount()).toBe(2);
      emitter.unsubscribe(cb1);
      expect(emitter.getObserverCount()).toBe(1);
    });
  });

  describe('Stock', () => {
    it('should notify observers of price changes', () => {
      const stock = new Stock('AAPL', 150);
      const callback = vi.fn();

      stock.onPriceChange(callback);
      stock.setPrice(155);

      expect(callback).toHaveBeenCalledWith({
        symbol: 'AAPL',
        oldPrice: 150,
        newPrice: 155,
      });
    });

    it('should update price correctly', () => {
      const stock = new Stock('GOOGL', 2800);
      stock.setPrice(2850);
      expect(stock.price).toBe(2850);
    });

    it('should notify multiple observers', () => {
      const stock = new Stock('TSLA', 700);
      const callback1 = vi.fn();
      const callback2 = vi.fn();

      stock.onPriceChange(callback1);
      stock.onPriceChange(callback2);
      stock.setPrice(750);

      expect(callback1).toHaveBeenCalledWith({
        symbol: 'TSLA',
        oldPrice: 700,
        newPrice: 750,
      });
      expect(callback2).toHaveBeenCalledWith({
        symbol: 'TSLA',
        oldPrice: 700,
        newPrice: 750,
      });
    });

    it('should stop notifying after unsubscribe', () => {
      const stock = new Stock('MSFT', 300);
      const callback = vi.fn();

      stock.onPriceChange(callback);
      stock.setPrice(310);
      stock.offPriceChange(callback);
      stock.setPrice(320);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe('TypedEventEmitter', () => {
    type Events = {
      userLogin: { userId: string; timestamp: number };
      userLogout: { userId: string };
      message: { text: string; from: string };
    };

    it('should emit and receive typed events', () => {
      const emitter = new TypedEventEmitter<Events>();
      const callback = vi.fn();

      emitter.on('userLogin', callback);
      emitter.emit('userLogin', { userId: 'user123', timestamp: Date.now() });

      expect(callback).toHaveBeenCalled();
      expect(callback.mock.calls[0]?.[0]).toHaveProperty('userId', 'user123');
      expect(callback.mock.calls[0]?.[0]).toHaveProperty('timestamp');
    });

    it('should handle multiple event types independently', () => {
      const emitter = new TypedEventEmitter<Events>();
      const loginCallback = vi.fn();
      const logoutCallback = vi.fn();
      const messageCallback = vi.fn();

      emitter.on('userLogin', loginCallback);
      emitter.on('userLogout', logoutCallback);
      emitter.on('message', messageCallback);

      emitter.emit('userLogin', { userId: 'alice', timestamp: 12345 });
      expect(loginCallback).toHaveBeenCalledTimes(1);
      expect(logoutCallback).toHaveBeenCalledTimes(0);
      expect(messageCallback).toHaveBeenCalledTimes(0);

      emitter.emit('message', { text: 'Hello', from: 'bob' });
      expect(messageCallback).toHaveBeenCalledTimes(1);
      expect(loginCallback).toHaveBeenCalledTimes(1);
    });

    it('should unsubscribe from specific event types', () => {
      const emitter = new TypedEventEmitter<Events>();
      const callback = vi.fn();

      emitter.on('userLogout', callback);
      emitter.emit('userLogout', { userId: 'user456' });
      emitter.off('userLogout', callback);
      emitter.emit('userLogout', { userId: 'user789' });

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});
