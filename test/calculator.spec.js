'use strict';

let Calculator = require('../Calculator');

describe('Calculator', () => {
  let instance;

  beforeAll(() => {
    instance = new Calculator();
  });

  it('add', () => {
    expect(instance.add()).toBe(0);
    expect(instance.add(5)).toBe(5);
    expect(instance.add(4, 8)).toBe(12);
    expect(instance.add(10, 20, 30)).toBe(60);
    expect(instance.add(6, 8, 4, 2)).toBe(20);
    expect(instance.add(5, 5, 5, 5, 5)).toBe(25);
  });

  it('multiply', () => {
    expect(instance.multiply()).toBe(0);
    expect(instance.multiply(5)).toBe(5);
    expect(instance.multiply(4, 8)).toBe(32);
    expect(instance.multiply(10, 20, 30)).toBe(6000);
    expect(instance.multiply(6, 8, 4, 2)).toBe(384);
    expect(instance.multiply(5, 5, 5, 5, 5)).toBe(3125);
  });
});