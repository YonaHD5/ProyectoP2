import { describe, it, expect } from 'vitest';
import { sumar, dividir, mayorDeArreglo, promedio, factorial, calcularDescuento, aplicarIVA, celsiusAFahrenheit, calcularIMC, calcularTotalCarrito } from '../src/matematicas.js';

describe('Pruebas de matemáticas', () => {
  it('suma dos números', () => expect(sumar(2, 3)).toBe(5));
  it('lanza error si no son números', () => expect(() => sumar('2', 3)).toThrow());
  
  it('divide correctamente', () => expect(dividir(10, 2)).toBe(5));
  it('lanza error al dividir entre cero', () => expect(() => dividir(5, 0)).toThrow());
  
  it('encuentra el mayor', () => expect(mayorDeArreglo([1, 5, 3])).toBe(5));
  it('error si arreglo vacío en mayorDeArreglo', () => expect(() => mayorDeArreglo([])).toThrow());
  
  it('calcula promedio', () => expect(promedio([10, 8, 9])).toBe(9));
  it('error si arreglo vacío en promedio', () => expect(() => promedio([])).toThrow());
  
  it('calcula factorial', () => expect(factorial(5)).toBe(120));
  it('factorial de 0 es 1', () => expect(factorial(0)).toBe(1));
  it('error en factorial negativo', () => expect(() => factorial(-1)).toThrow());
  
  it('calcula descuento', () => expect(calcularDescuento(100, 20)).toBe(80));
  it('error descuento negativo', () => expect(() => calcularDescuento(-10, 20)).toThrow());
  it('error porcentaje invalido', () => expect(() => calcularDescuento(100, 150)).toThrow());
  
  it('aplica IVA', () => expect(aplicarIVA(100)).toBeCloseTo(116));
  it('error IVA negativo', () => expect(() => aplicarIVA(-10)).toThrow());
  
  it('convierte a Fahrenheit', () => expect(celsiusAFahrenheit(0)).toBe(32));
  it('error bajo cero absoluto', () => expect(() => celsiusAFahrenheit(-300)).toThrow());
  
  it('calcula IMC', () => expect(calcularIMC(70, 1.75)).toBeCloseTo(22.85, 1));
  it('error IMC cero', () => expect(() => calcularIMC(0, 1.75)).toThrow());
  
  it('calcula total sin descuento', () => expect(calcularTotalCarrito([{precio: 100, cantidad: 2}])).toBe(200));
  it('calcula total con descuento mayor a 1000', () => expect(calcularTotalCarrito([{precio: 600, cantidad: 2}])).toBe(1080));
  it('error cantidad negativa carrito', () => expect(() => calcularTotalCarrito([{precio: 100, cantidad: 0}])).toThrow());
});