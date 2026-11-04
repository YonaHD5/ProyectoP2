export function esPar(numero) {
  if (!Number.isInteger(numero)) {
    throw new Error('El número debe ser entero')
  }
  return numero % 2 === 0
}

export function signoNumero(numero) {
  if (numero > 0) {
    return 'positivo'
  }
  if (numero < 0) {
    return 'negativo'
  }
  return 'cero'
}

export function esPrimo(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

export function fizzBuzz(n) {
  if (n % 15 === 0) {
    return 'FizzBuzz'
  }
  if (n % 3 === 0) {
    return 'Fizz'
  }
  if (n % 5 === 0) {
    return 'Buzz'
  }
  return String(n)
}

export function esMayorDeEdad(edad) {
  if (edad < 0) {
    throw new Error('La edad no puede ser negativa')
  }
  return edad >= 18
}

export function clasificarEdad(edad) {
  if (edad < 0) {
    throw new Error('La edad no puede ser negativa')
  }
  if (edad < 12) {
    return 'niño'
  }
  if (edad < 18) {
    return 'adolescente'
  }
  if (edad < 65) {
    return 'adulto'
  }
  return 'adulto mayor'
}

export function calificacionTexto(calificacion) {
  if (calificacion < 0 || calificacion > 10) {
    throw new Error('La calificación debe estar entre 0 y 10')
  }
  if (calificacion >= 9) {
    return 'Excelente'
  }
  if (calificacion >= 8) {
    return 'Muy bien'
  }
  if (calificacion >= 7) {
    return 'Bien'
  }
  if (calificacion >= 6) {
    return 'Suficiente'
  }
  return 'Reprobado'
}

export function esBisiesto(anio) {
  if (anio % 400 === 0) {
    return true
  }
  if (anio % 100 === 0) {
    return false
  }
  if (anio % 4 === 0) {
    return true
  }
  return false
}

export function clasificarIMC(imc) {
  if (imc < 18.5) {
    return 'Bajo peso'
  }
  if (imc < 25) {
    return 'Normal'
  }
  if (imc < 30) {
    return 'Sobrepeso'
  }
  return 'Obesidad'
}

export function tipoTriangulo(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Los lados deben ser mayores a cero')
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error('Los lados no forman un triángulo')
  }
  if (a === b && b === c) {
    return 'equilátero'
  }
  if (a === b || b === c || a === c) {
    return 'isósceles'
  }
  return 'escaleno'
}

export function validarPassword(password) {
  if (password.length < 8) {
    return false
  }
  if (!/[A-Z]/.test(password)) {
    return false
  }
  if (!/[0-9]/.test(password)) {
    return false
  }
  return true
}