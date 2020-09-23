//inicalizamos constructor
function auto(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

var cantidad = prompt("How many cars do you own?");
var autos=[]; //mi arreglo
for (let i = 0; i < cantidad; i++) { //for para agregar cantidad necesaria
    const element = cantidad[i];
    var make = prompt("make");
    var model = prompt("model");
    var year = prompt('year');
     autos.push(new auto(make,model,year)) //agregamos a el arreglo
}

console.table(autos); // imprimimos el arreglo de objetos en forma de tabla

switch (key) {
    case value:
        
        break;

    default:
        break;
}

//* ... *//

//