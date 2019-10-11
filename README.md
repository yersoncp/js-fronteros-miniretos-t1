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

## Reto Nº 5
Los alfabetos disfrutan hacer olas en el futbol. Ayúdalo creando una función que convierta una cadena a una matriz donde una letra mayúscula significa que está de pie.
1. La cadena de entrada siempre estará en minúscula
2. Si el carácter de la cadena es un espacio en blanco, páselo como si fuera un asiento vacío.

```javascript
wave("hola") // return ["Hola", "hOla", "hoLa", "holA"]
wave("gol peru") // return ["Gol peru", "gOl peru", "goL peru", "gol Peru", "gol pEru", "gol peRu", "gol perU"]
wave("") // return [];
```

## Reto Nº 6

**Érase una vez, en un camino a través del viejo oeste salvaje...**

Un hombre recibió instrucciones para ir de un punto a otro. Las instrucciones eran "NORTE", "SUR", "OESTE", "ESTE". Claramente, "NORTE" y "SUR" son opuestos, "OESTE" y "ESTE" también. Ir en una dirección y regresar en la dirección opuesta es un esfuerzo innecesario. Dado que este es el salvaje oeste, con un clima terrible y poca agua, es importante ahorrar energía, de lo contrario, ¡podría morir!


Las instrucciones dadas al hombre son, por ejemplo:
```
["NORTE", "SUR", "SUR", "ESTE", "OESTE", "NORTE"]
```
Inmediatamente puede ver que ir "NORTE" y luego "SUR" no es razonable, ¡mejor quédese en el mismo lugar! El camino se convierte en ["SUR", "ESTE", "OESTE", "NORTE"]. Ahora, "ESTE" y "OESTE" se anula entre sí. Luego "SUR" y "NORTE" no son directamente opuestos pero se vuelven directamente opuestos después de la reducción de "ESTE" y "OESTE".

La tarea es darle al hombre una versión simplificada del plan.


``` javascript
reducePlan(["SUR", "NORTE", "ESTE", "OESTE", "ESTE"]);
// return ["ESTE"]

reducePlan(["NORTE", "SUR", "SUR", "ESTE", "OESTE", "NORTE"]);
// return []

reducePlan(["ESTE", "SUR", "SUR", "NORTE", "NORTE", "OESTE"]);
// return []
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

function mask(cadena){
  return cadena.replace(/.(?=.{4})/g, '#')
}
```

## Nº 4:
```javascript
function incrementTicket(str) {
  let arr = str.match(/[a-zA-Z]+|0+|\d+$/g).reverse();
  arr[0] = +arr[0] ? +arr[0] + 1 : arr[0].replace(/\d{1}$/g, 1);
  return arr.reverse().join('');
}

function incrementTicket(ticket) {
  var str_num = ticket.replace(new RegExp('\[A-Z]', 'g'), '0');
  var str_text = ticket.replace(new RegExp('\[0-9]', 'g'), '');
  var num = Number(str_num) + 1;
  return str_text + str_num;
}

function incrementTicket(ticket) {
  return ticket.replace(/\d+$/, num => {
    let out = `${+num + 1}`
    return num.slice(0, -out.length) + out
  })
}
```

## Nº 5

```javascript
function wave(str) {
  let ola = []
  if (str) {
    str.split('').map((letra, index) => {
      if (letra !== ' ') {
        ola.push(str.replace(str[index], letra.toUpperCase()))
      }
    })
  }
  return ola
}
```

```javascript
function wave(str) {
  return str.split('')
    .map((e, index) => {
      return e !== ' ' ? str.replace(/./g, (c, i) => i === index ? c.toUpperCase() : c) : null
    })
    .filter(e => e)
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