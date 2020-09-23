//arrays
var colores = ["rojo", "azul", "verde", "amarillo"];

//reverse, metodo para invertir los elementos
colores.reverse();
["amarillo", "verde", "azul", "rojo", "anaranjado"]

//sort - metodo para ordenar alfabeticamente el array con los strings
colores.sort();
["amarillo", "anaranjado", "azul", "rojo", "verde"]

//Slice, método que puede contener uno o dos argumentos, que indiquen el inicio y parada de posiciones, pues devuelve los elementos contenidos en el array, de acuerdo a los argumentos indicados, por ejemplo si a colores, le agregamos colores.slice(1,3); obtendremos los que se encuentran en la posición 1, 2
colores =  ["amarillo", "anaranjado", "azul", "rojo", "verde"]
colores.slice(1,3);
["anaranjado", "azul"]

var frutas = ["Manzana", "Plátano", "Cereza", "Fresas"];

console.log(frutas);

console.log(frutas.length); // lingitud o numero de elementos
console.log(frutas[n]); // acceder al elemento por medio de index

//Mutar o alterar Array
var masFrutas = frutas.push("Uvas") //añadir elementos al final del array
var ultimo = frutas.pop()//Eliminar el último elemento del Array
var nuevaLongitud = frutas.unshift("Uvas");//añadir elemento al inicio del array
var borrarFruta = frutas.shift("Uvas");//Borrar elemento
var posicion = frutas.indexOf("Cereza");//Devuelve el index o posicion del elemento```
