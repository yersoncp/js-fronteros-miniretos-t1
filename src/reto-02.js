function largest(matriz) {
  return Math.max(...matriz)
}

console.log(largest([1, 2, 3, 4, 5]))
console.log(largest([-100, Infinity, 5, 2, 7218902]))
console.log(largest([0]))