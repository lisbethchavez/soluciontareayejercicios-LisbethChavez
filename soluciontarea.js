//SOLUCIÓN TAREA
//1.Se pide crear la funcion/es que devuelvan aquellas palabras que NO tiene la misma voz
//const entrada =["carrera","amalgama","oligopolio","zoom","casa","cama","enano"];
//const esperado= ["carrera","oligopolio","enano"];


//2. Dado el siguiente vector array=[5,4,20,7,5,10] use map, 
//para devolver cada elemento del vector multiplicado por 10 
//resultado esperado [50,40,200,70,50,100]

const array=[5,4,20,7,5,10];

function multiplicaArrayx10(array){
    return array.map(data=>{
        return data*10;
    })
}

function multiplicaArrayx10v2(array){
    return array.map(data=>data*10);
}

console.log(multiplicaArrayx10(array));
console.log(multiplicaArrayx10v2(array));

//3.Dada la siguiente matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ] y usando únicamente map, 
//devuelva cada elemento de la matriz multiplicado por 3
//resultado esperado = [[3, 6, 9], [12, 15, 18], [21, 24, 27] ]

matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ]; 

function matrizmultiplicadax3(array){
    return array.map(item=>{
        return item.map(data=>{
            return data*3;
        })
    });
}    
    
console.log (matrizmultiplicadax3(matriz));
//4.Dada la siguiente matriz = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]]; 
//utilice reduce para encontrar el producto de sus elementos,
//resultado esperado: 720

const array1=[1,2,3,4];
const x2=array1.reduce((ac, va)=>{
    return ac+va;
})

console.log(x2);
matrizRed=[[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];

function multiplicaMatriz(array){
    return array.reduce((ac, va)=>{
        return ac.concat(va);
    }).reduce((ac,va)=>{
        return(ac*va);
    });
}
console.log("Matriz original: ",matrizRed);
console.log(multiplicaMatriz(matrizRed));

//EJECICIO EN CLASE
//5.se tiene un vector con los siguientes elementos input=[30,48,11,5,32]
// se pide diseñar la funcion que devuelva la siguiente cadena:
//"Tus numeros de la suerte son: 30,48,11,5 y 32"
//usar la funcion reduce 
const arraynumeros=[30,48,11,5,32];
function numsuerte(array){
    const cad="Tus numeros de la suerte son: ";
    return cad+array.reduce((ac,va,index,array)=>{
        var aux= index <(array.length-1)?",":"y";
        return (ac)+","+aux+(va);
    });
}
console.log(numsuerte(arraynumeros))

//Verificar si uno de los elementos del array es mayor a 10

const goodinput=[8,9,3,11,6];
function numMayorq10(array){
    return array.some(data=>{
        return data>10;
    })
}

console.log(numMayorq10(goodinput));



