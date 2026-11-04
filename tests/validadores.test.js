import { describe, it, expect } from 'vitest';
import { esPar } from '../src/validadores.js';

describe('Pruebas de validadores', () => {
  it('devuelve true si el número es par', () => {
    expect(esPar(4)).toBe(true);
  });
});