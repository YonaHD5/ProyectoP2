import { describe, it, expect } from 'vitest';
import { contarVocales, invertirTexto, esPalindromo, capitalizar, contarPalabras } from '../src/textos.js';

describe('Pruebas de textos', () => {
  it('cuenta vocales', () => expect(contarVocales('murciélago')).toBe(5));
  it('cuenta cero vocales', () => expect(contarVocales('xyz')).toBe(0));
  
  it('invierte texto', () => expect(invertirTexto('hola')).toBe('aloh'));
  it('error si no es string', () => expect(() => invertirTexto(123)).toThrow());
  
  it('detecta palindromo', () => expect(esPalindromo('oso')).toBe(true));
  it('detecta palindromo con espacios', () => expect(esPalindromo('Anita lava la tina')).toBe(true));
  it('rechaza no palindromo', () => expect(esPalindromo('hola')).toBe(false));
  it('rechaza vacio palindromo', () => expect(esPalindromo(' ')).toBe(false));
  
  it('capitaliza palabra', () => expect(capitalizar('hOLA')).toBe('Hola'));
  it('capitaliza vacio', () => expect(capitalizar('')).toBe(''));
  
  it('cuenta palabras normal', () => expect(contarPalabras('hola mundo')).toBe(2));
  it('cuenta palabras con espacios extra', () => expect(contarPalabras('  hola   mundo ')).toBe(2));
  it('cuenta vacio', () => expect(contarPalabras('')).toBe(0));
});