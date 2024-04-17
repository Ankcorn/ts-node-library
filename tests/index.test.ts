import { test, expect } from 'vitest';
import { add } from '../src';

test('add: 2+2 = 4', () => {
    const sum = add(2, 2);

    expect(sum).toBe(4)
})