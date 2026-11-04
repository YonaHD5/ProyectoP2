export function contarVocales(texto) {
  const vocales = 'aeiouáéíóú'
  let contador = 0
  for (const letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) {
      contador++
    }
  }
  return contador
}

export function invertirTexto(texto) {
  if (typeof texto !== 'string') {
    throw new Error('Se esperaba un texto')
  }
  return texto.split('').reverse().join('')
}

export function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replaceAll(' ', '')
  if (limpio.length === 0) {
    return false
  }
  return limpio === limpio.split('').reverse().join('')
}

export function capitalizar(texto) {
  if (texto === '') {
    return ''
  }
  return texto[0].toUpperCase() + texto.slice(1).toLowerCase()
}

export function contarPalabras(texto) {
  const limpio = texto.trim()
  if (limpio === '') {
    return 0
  }
  return limpio.split(/\s+/).length
}