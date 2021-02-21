function repeat(str, times) {
  let cadena = ''
  for (let i = 0; i < times; i++) cadena += str
  return cadena
}

console.log(repeat('hello', 2))
console.log(repeat('.', 3))
console.log(repeat('cat', 1))