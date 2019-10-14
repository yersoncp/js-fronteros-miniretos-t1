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

## Reto Nº 7

En un momento crucial, una cantidad **'n'** de personas forman un círculo para finalmente quedar sólo un sobreviviente, lamentablemente el resto será ejecutado por la justicia que a elegido la [Permutación de Josefo](https://en.wikipedia.org/wiki/Josephus_problem) para hallar al único sobreviviente.

El conteo comienza alrededor del círculo en una dirección. Cada persona en la posición **'k'** es ejecutada. El procedimiento se repite con las personas restantes hasta que sólo quede una persona y se libere.

**Ejemplo:**
```javascript
josephusSurvivor(7, 3)
//Si n=7 personas en un círculo y cada k=3 son ejecutadas

1,2,3,4,5,6,7 // Secuencia inicial
1,2,4,5,7 // 3 y 6 ejecutados
1,4,5 // 2 y 7 ejecutados
1,4 // 5 ejecutado
4 // 1 ejecutado, el sobreviviente es 4
```

Ya sabes que hacer, encuentra al sobreviviente. Si hay solo una persona tomar como sobreviviente único.

```javascript
josephusSurvivor(7, 3) // return 4
josephusSurvivor(41, 3) // return 31
josephusSurvivor(1, 2) // return 1
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

```javascript
function wave(cadena) {
  let _olas = [];
  cadena.split("").map(function (c, i) {
    if (c !== '')
      _olas.push(cadena.replace(cadena[i], c.toUpperCase()));
  });
  return _olas;
}
```

## Nº 6

```javascript
function reducePlan(arr) {
  let getInverse = function(e) {
    switch (e) {
      case 'SUR': return 'NORTE'; break;
      case 'NORTE': return 'SUR'; break;
      case 'ESTE': return 'OESTE'; break;
      case 'OESTE': return 'ESTE'; break;
      default: return ''; break;
    }
  }
  let index = 0;
  while (arr[index + 1]) {
    if (arr[index] === getInverse(arr[index + 1])) {
      arr.splice(index, 2);
      index = 0;
    } else {
      index++;
    }
  }
  return arr;
}
```

```javascript
function reducePlan(_plan) {
  var _string = "";
  _plan.forEach(e => {
    if (e === "NORTE") {
      _string += "N";
    } else if (e === "SUR") {
      _string += "S";
    } else if (e === "ESTE") {
      _string += "E";
    } else if (e === "OESTE") {
      _string += "O";
    }
  });
  var _matches = /NS|SN|EO|OE/;
  while (_matches.test(_string)) {
    _string = _string.replace(_matches, "");
  }
  var res = _string.match(/N|S|E|O/);
  if (!res)
    return [];
  var _p = res.input.trim().split("");
  var newPlan = [];
  _p.forEach(e => {
    if (e === "N") {
      newPlan.push("NORTE");
    } else if (e === "S") {
      newPlan.push("SUR");
    } else if (e === "E") {
      newPlan.push("ESTE");
    } else if (e === "O") {
      newPlan.push("OESTE");
    }
  })
  return newPlan;
}
```