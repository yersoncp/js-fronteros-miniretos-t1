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


<!-- ## Código fuente
* (I) [Stackblitz @yersoncp](https://stackblitz.com/edit/js-fronteros-miniretos-t1-source)
* (II) [Stackblitz @kenyojoel903](https://stackblitz.com/edit/js-fronteros-miniretos-t1-akawhl)
* (III) [Stackblitz @kikesan](https://stackblitz.com/edit/js-fronteros-miniretos-t1-zmayxj) -->