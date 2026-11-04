export function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos valores deben ser números')
  }
  return a + b
}

export function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero')
  }
  return a / b
}

export function mayorDeArreglo(numeros) {
  if (numeros.length === 0) {
    throw new Error('El arreglo no puede estar vacío')
  }
  let mayor = numeros[0]
  for (const n of numeros) {
    if (n > mayor) {
      mayor = n
    }
  }
  return mayor
}

export function promedio(numeros) {
  if (numeros.length === 0) {
    throw new Error('El arreglo no puede estar vacío')
  }
  let suma = 0
  for (const n of numeros) {
    suma += n
  }
  return suma / numeros.length
}

export function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('El número debe ser un entero mayor o igual a cero')
  }
  if (n === 0) {
    return 1
  }
  let resultado = 1
  for (let i = 1; i <= n; i++) {
    resultado *= i
  }
  return resultado
}

export function calcularDescuento(precio, porcentaje) {
  if (precio < 0) {
    throw new Error('El precio no puede ser negativo')
  }
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error('El porcentaje debe estar entre 0 y 100')
  }
  return precio - (precio * porcentaje) / 100
}

export function aplicarIVA(precio) {
  if (precio < 0) {
    throw new Error('El precio no puede ser negativo')
  }
  return precio * 1.16
}

export function celsiusAFahrenheit(celsius) {
  if (celsius < -273.15) {
    throw new Error('Temperatura por debajo del cero absoluto')
  }
  return (celsius * 9) / 5 + 32
}

export function calcularIMC(peso, altura) {
  if (peso <= 0 || altura <= 0) {
    throw new Error('El peso y la altura deben ser mayores a cero')
  }
  return peso / (altura * altura)
}

export function calcularTotalCarrito(productos) {
  let total = 0
  for (const producto of productos) {
    if (producto.cantidad <= 0) {
      throw new Error('La cantidad debe ser mayor a cero')
    }
    total += producto.precio * producto.cantidad
  }
  if (total > 1000) {
    total = total * 0.9
  }
  return total
}