import { describe, it, expect } from 'vitest';
import { sumar } from '../src/matematicas.js';

describe('Pruebas de matemáticas', () => {
  it('suma dos números correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  it('lanza error si los valores no son números', () => {
    expect(() => sumar('2', 3)).toThrow('Ambos valores deben ser números');
  });
});