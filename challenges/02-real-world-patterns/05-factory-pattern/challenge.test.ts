import { describe, it, expect } from 'vitest';
import {
  EmailNotification,
  SMSNotification,
  PushNotification,
  NotificationFactory,
  createNotification,
} from './challenge';

describe('Challenge 8: Factory Pattern', () => {
  describe('EmailNotification', () => {
    it('should send email notification', () => {
      const email = new EmailNotification(
        'user@example.com',
        'Welcome',
        'Hello there!'
      );
      expect(email.send()).toBe('Email sent to user@example.com: Welcome');
    });
  });

  describe('SMSNotification', () => {
    it('should send SMS notification', () => {
      const sms = new SMSNotification('+1234567890', 'Your code is 1234');
      expect(sms.send()).toBe('SMS sent to +1234567890: Your code is 1234');
    });
  });

  describe('PushNotification', () => {
    it('should send push notification', () => {
      const push = new PushNotification('device-123', 'New Message', 'You have mail');
      expect(push.send()).toBe('Push sent to device-123: New Message');
    });
  });

  describe('NotificationFactory', () => {
    const factory = new NotificationFactory();

    it('should create email notifications', () => {
      const email = factory.createEmail('test@example.com', 'Test', 'Body');
      expect(email).toBeInstanceOf(EmailNotification);
      expect(email.send()).toBe('Email sent to test@example.com: Test');
    });

    it('should create SMS notifications', () => {
      const sms = factory.createSMS('+9876543210', 'Hello via SMS');
      expect(sms).toBeInstanceOf(SMSNotification);
      expect(sms.send()).toBe('SMS sent to +9876543210: Hello via SMS');
    });

    it('should create push notifications', () => {
      const push = factory.createPush('device-456', 'Alert', 'Important!');
      expect(push).toBeInstanceOf(PushNotification);
      expect(push.send()).toBe('Push sent to device-456: Alert');
    });
  });

  describe('createNotification (type-safe factory)', () => {
    it('should create email from config', () => {
      const notification = createNotification({
        type: 'email',
        recipient: 'admin@example.com',
        subject: 'System Alert',
        body: 'Server is down',
      });
      expect(notification.send()).toBe('Email sent to admin@example.com: System Alert');
    });

    it('should create SMS from config', () => {
      const notification = createNotification({
        type: 'sms',
        phoneNumber: '+1111111111',
        message: 'Verification code: 5678',
      });
      expect(notification.send()).toBe('SMS sent to +1111111111: Verification code: 5678');
    });

    it('should create push from config', () => {
      const notification = createNotification({
        type: 'push',
        deviceId: 'device-789',
        title: 'Update Available',
        body: 'Version 2.0 is ready',
      });
      expect(notification.send()).toBe('Push sent to device-789: Update Available');
    });
  });
});
