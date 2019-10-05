# Miniretos Javascript

Serie de 10 miniretos de javascript con el objetivo de reforzar los conocimientos en Javascript.

## Participantes

* **[@yersoncp](https://github.com/yersoncp)**
* **[@kenyojoel903](https://github.com/kenyojoel903)**
* **[@kikesan](https://github.com/kikesan)**

## Reto Nº 1:

Cree una función que repita una cadena n-veces. 'n' es un entero positivo. El primer parámetro es la cadena que se repetirá, y el segundo es la cantidad de veces que se repetirá.

```javascript
repeat('hello', 2); // returns 'hellohello'
repeat('.', 3); // returns '...'
repeat('cat', 1); // returns 'cat'
```

## Reto Nº 2:

Cree una función que devuelva el número mayor en una matriz de números. La matriz siempre tendrá al menos 1 número.

```javascript
largest([1, 2, 3, 4, 5]); // returns 5
largest([-100, Infinity, 5, 2, 7218902]); // returns Infinity
largest([0]); // returns 0
```

## Reto Nº 3

Cree una función que enmascara una cadena de números, por ejemplo el número de tarjeta de crédito. Todos los números, excepto los últimos 4, deben reemplazarse con el carácter #.

``` javascript
mask('123456789'); // returns '#####6789'
mask('12345'); // returns '#2345'
mask('1234'); // returns '1234'
mask(''); // returns ''
```

## Reto Nº 4
El número de serie de diversos tickets consta de letras seguidos de nùmeros. Cree una función que permita añadir +1 a la parte numérica final del ticket.

```javascript
incrementTicket('AF4575');  // returns 'AF4576'
incrementTicket('TP0005');  // returns 'TP0006'
incrementTicket('HEP00049');  // returns 'HEP00050'
incrementTicket('RB0000');  // returns 'RB0001'
```

---

# Solución

## Nº 1:

```javascript
function repeat(str, n) {
  return n === 1 ? str : str.concat(repeat(str, --n));
}
```
```javascript
function repeat(text, number) {
  return text.repeat(number);
}
```
```javascript
function repeat(str, times) {
  let cadena = ''
  for (let i = 0; i < times; i++) cadena += str
  return cadena
}
```

## Nº 2:
```javascript
function largest(arr) {
  return arr.sort((a, b) => b - a)[0];
}
```
```javascript
function largest(_array) {
  return Math.max.apply(Math, _array);
}
```
```javascript
function largest(matriz){
  return Math.max(...matriz)
}
```

## Nº 3:
```javascript
function mask(str) {
  return str.replace(/\d(?=\d{4})/g, '#');
}
function mask(str) {
  return str.replace(/.(?=.{4})/g, '#')
}
```

<!-- ## Nº 2:
**[@yersoncp](https://github.com/yersoncp)**
```javascript
```
**[@kenyojoel903](https://github.com/kenyojoel903)**
```javascript
```
**[@kikesan](https://github.com/kikesan)**
```javascript
``` -->