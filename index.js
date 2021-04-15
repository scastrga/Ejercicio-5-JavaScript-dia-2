// Crear un array de números del 1 al 10
//  Mostrar por consola los números pares del array con el método for

var arrayNum = [1,2,3,4,5,6,7,8,9,10];

var pares = [];
var impares = [];

for(let i= 0;i<arrayNum.length;i++){
    if(i % 2 ==0){
        impares.push(arrayNum[i]);
    }
    else{
        pares.push(arrayNum[i]);
    }
}

console.log("Los numeros pares son " + pares);
console.log("Los numeros impares son " + impares);