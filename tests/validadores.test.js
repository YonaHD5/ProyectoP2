import { describe, it, expect } from 'vitest';
import { esPar, signoNumero, esPrimo, fizzBuzz, esMayorDeEdad, clasificarEdad, calificacionTexto, esBisiesto, clasificarIMC, tipoTriangulo, validarPassword } from '../src/validadores.js';

describe('Pruebas de validadores', () => {
  it('es par', () => expect(esPar(4)).toBe(true));
  it('es impar', () => expect(esPar(7)).toBe(false));
  it('error si no es entero', () => expect(() => esPar(2.5)).toThrow());
  
  it('positivo', () => expect(signoNumero(5)).toBe('positivo'));
  it('negativo', () => expect(signoNumero(-3)).toBe('negativo'));
  it('cero', () => expect(signoNumero(0)).toBe('cero'));
  
  it('es primo', () => expect(esPrimo(7)).toBe(true));
  it('no es primo', () => expect(esPrimo(8)).toBe(false));
  it('menor a 2 no es primo', () => expect(esPrimo(1)).toBe(false));
  
  it('fizzbuzz', () => expect(fizzBuzz(15)).toBe('FizzBuzz'));
  it('fizz', () => expect(fizzBuzz(9)).toBe('Fizz'));
  it('buzz', () => expect(fizzBuzz(10)).toBe('Buzz'));
  it('numero', () => expect(fizzBuzz(7)).toBe('7'));
  
  it('mayor de edad', () => expect(esMayorDeEdad(18)).toBe(true));
  it('menor de edad', () => expect(esMayorDeEdad(16)).toBe(false));
  it('error edad negativa', () => expect(() => esMayorDeEdad(-1)).toThrow());
  
  it('clasificar nino', () => expect(clasificarEdad(10)).toBe('niño'));
  it('clasificar adolescente', () => expect(clasificarEdad(15)).toBe('adolescente'));
  it('clasificar adulto', () => expect(clasificarEdad(30)).toBe('adulto'));
  it('clasificar adulto mayor', () => expect(clasificarEdad(70)).toBe('adulto mayor'));
  it('error edad negativa clasificar', () => expect(() => clasificarEdad(-1)).toThrow());
  
  it('excelente', () => expect(calificacionTexto(9)).toBe('Excelente'));
  it('muy bien', () => expect(calificacionTexto(8.59)).toBe('Muy bien'));
  it('bien', () => expect(calificacionTexto(7)).toBe('Bien'));
  it('suficiente', () => expect(calificacionTexto(6)).toBe('Suficiente'));
  it('error calificacion alta', () => expect(() => calificacionTexto(11)).toThrow());
  
  it('es bisiesto 400', () => expect(esBisiesto(2000)).toBe(true));
  it('no es bisiesto 100', () => expect(esBisiesto(1900)).toBe(false));
  it('es bisiesto 4', () => expect(esBisiesto(2024)).toBe(true));
  
  it('bajo peso', () => expect(clasificarIMC(18)).toBe('Bajo peso'));
  it('normal', () => expect(clasificarIMC(22)).toBe('Normal'));
  it('sobrepeso', () => expect(clasificarIMC(27)).toBe('Sobrepeso'));
  it('obesidad', () => expect(clasificarIMC(32)).toBe('Obesidad'));
  
  it('equilatero', () => expect(tipoTriangulo(3, 3, 3)).toBe('equilátero'));
  it('isosceles', () => expect(tipoTriangulo(3, 3, 2)).toBe('isósceles'));
  it('escaleno', () => expect(tipoTriangulo(3, 4, 5)).toBe('escaleno'));
  it('error no triangulo', () => expect(() => tipoTriangulo(1, 2, 10)).toThrow());
  it('error lado cero', () => expect(() => tipoTriangulo(0, 3, 3)).toThrow());
  
  it('password valida', () => expect(validarPassword('Secreto123')).toBe(true));
  it('password corta', () => expect(validarPassword('Sec1')).toBe(false));
  it('password sin mayuscula', () => expect(validarPassword('secreto123')).toBe(false));
  it('password sin numero', () => expect(validarPassword('Secretoooo')).toBe(false));
});