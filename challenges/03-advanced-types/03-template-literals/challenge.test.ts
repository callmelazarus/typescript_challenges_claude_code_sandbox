import { describe, it, expect, expectTypeOf } from 'vitest';
import {
  Greeting,
  HTTPMethod,
  EventName,
  CSSProperty,
  SnakeToCamel,
  createEventHandler,
  buildRoute,
  CSSColorValue,
} from './challenge';

describe('Challenge 15: Template Literal Types', () => {
  describe('Greeting type', () => {
    it('should create greeting string', () => {
      expectTypeOf<Greeting<'Alice'>>().toEqualTypeOf<'Hello, Alice!'>();
      expectTypeOf<Greeting<'Bob'>>().toEqualTypeOf<'Hello, Bob!'>();
      expectTypeOf<Greeting<'World'>>().toEqualTypeOf<'Hello, World!'>();
    });
  });

  describe('HTTPMethod type', () => {
    it('should create all HTTP method combinations', () => {
      type Expected = 'GET /api' | 'POST /api' | 'PUT /api' | 'DELETE /api';
      expectTypeOf<HTTPMethod>().toEqualTypeOf<Expected>();
    });
  });

  describe('EventName type', () => {
    it('should create event names', () => {
      expectTypeOf<EventName<'user'>>().toEqualTypeOf<'onUser' | 'onUserChange'>();
      expectTypeOf<EventName<'click'>>().toEqualTypeOf<'onClick' | 'onClickChange'>();
    });
  });

  describe('CSSProperty type', () => {
    it('should create CSS property strings', () => {
      expectTypeOf<CSSProperty<'color', 'red'>>().toEqualTypeOf<'color: red'>();
      expectTypeOf<CSSProperty<'font-size', '16px'>>().toEqualTypeOf<'font-size: 16px'>();
      expectTypeOf<CSSProperty<'display', 'flex'>>().toEqualTypeOf<'display: flex'>();
    });
  });

  describe('SnakeToCamel type', () => {
    it('should convert snake_case to camelCase', () => {
      expectTypeOf<SnakeToCamel<'hello_world'>>().toEqualTypeOf<'helloWorld'>();
      expectTypeOf<SnakeToCamel<'user_name'>>().toEqualTypeOf<'userName'>();
      expectTypeOf<SnakeToCamel<'is_active'>>().toEqualTypeOf<'isActive'>();
    });

    it('should handle multiple underscores', () => {
      expectTypeOf<SnakeToCamel<'foo_bar_baz'>>().toEqualTypeOf<'fooBarBaz'>();
    });

    it('should handle strings without underscores', () => {
      expectTypeOf<SnakeToCamel<'hello'>>().toEqualTypeOf<'hello'>();
    });
  });

  describe('createEventHandler function', () => {
    it('should create onClick from click', () => {
      const handler = createEventHandler('click');
      expect(handler).toBe('onClick');
      expectTypeOf(handler).toEqualTypeOf<'onClick'>();
    });

    it('should create onChange from change', () => {
      const handler = createEventHandler('change');
      expect(handler).toBe('onChange');
      expectTypeOf(handler).toEqualTypeOf<'onChange'>();
    });

    it('should capitalize event name', () => {
      const handler = createEventHandler('submit');
      expect(handler).toBe('onSubmit');
      expectTypeOf(handler).toEqualTypeOf<'onSubmit'>();
    });
  });

  describe('buildRoute function', () => {
    it('should build API routes', () => {
      const route = buildRoute('api', 'users');
      expect(route).toBe('/api/users');
      expectTypeOf(route).toEqualTypeOf<'/api/users'>();
    });

    it('should work with different paths', () => {
      const route = buildRoute('admin', 'dashboard');
      expect(route).toBe('/admin/dashboard');
      expectTypeOf(route).toEqualTypeOf<'/admin/dashboard'>();
    });
  });

  describe('CSSColorValue type', () => {
    it('should create all CSS color combinations', () => {
      // Should include combinations like:
      type Sample1 = 'color: red';
      type Sample2 = 'background-color: blue';
      type Sample3 = 'border-color: green';

      expectTypeOf<Sample1>().toMatchTypeOf<CSSColorValue>();
      expectTypeOf<Sample2>().toMatchTypeOf<CSSColorValue>();
      expectTypeOf<Sample3>().toMatchTypeOf<CSSColorValue>();
    });
  });
});
