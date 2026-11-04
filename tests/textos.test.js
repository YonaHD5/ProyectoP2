import { describe, it, expect } from 'vitest';
import { contarVocales } from '../src/textos.js';

describe('Pruebas de textos', () => {
  it('cuenta las vocales correctamente', () => {
    expect(contarVocales('murciélago')).toBe(5);
  });
});