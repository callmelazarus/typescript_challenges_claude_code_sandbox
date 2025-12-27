// Base interface that all notifications implement
export interface Notification {
  send(): string;
}

// TODO: Implement EmailNotification class
// Should have: recipient (string), subject (string), body (string)
// send() should return: "Email sent to {recipient}: {subject}"
export class EmailNotification implements Notification {
  constructor(
    public recipient: string,
    public subject: string,
    public body: string
  ) {}

  send(): string {
    // Your code here
    throw new Error('Not implemented');
  }
}

// TODO: Implement SMSNotification class
// Should have: phoneNumber (string), message (string)
// send() should return: "SMS sent to {phoneNumber}: {message}"
export class SMSNotification implements Notification {
  constructor(
    public phoneNumber: string,
    public message: string
  ) {}

  send(): string {
    // Your code here
    throw new Error('Not implemented');
  }
}

// TODO: Implement PushNotification class
// Should have: deviceId (string), title (string), body (string)
// send() should return: "Push sent to {deviceId}: {title}"
export class PushNotification implements Notification {
  constructor(
    public deviceId: string,
    public title: string,
    public body: string
  ) {}

  send(): string {
    // Your code here
    throw new Error('Not implemented');
  }
}

// TODO: Implement the NotificationFactory class
export class NotificationFactory {
  // Create an email notification
  createEmail(recipient: string, subject: string, body: string): EmailNotification {
    // Your code here
    throw new Error('Not implemented');
  }

  // Create an SMS notification
  createSMS(phoneNumber: string, message: string): SMSNotification {
    // Your code here
    throw new Error('Not implemented');
  }

  // Create a push notification
  createPush(deviceId: string, title: string, body: string): PushNotification {
    // Your code here
    throw new Error('Not implemented');
  }
}

// Advanced: Type-safe factory function with discriminated unions
type NotificationConfig =
  | { type: 'email'; recipient: string; subject: string; body: string }
  | { type: 'sms'; phoneNumber: string; message: string }
  | { type: 'push'; deviceId: string; title: string; body: string };

// TODO: Implement this function
// Based on config.type, create the appropriate notification
// TypeScript should narrow the config type in each branch
export function createNotification(config: NotificationConfig): Notification {
  // Your code here
  throw new Error('Not implemented');
}
