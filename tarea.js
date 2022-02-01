//Verificar si una de las cadenas de caracteres del array
//tiene mas de 10 caracteres

const vectorcadenas=["Ecuador","Argentina","Dinamarca","Corea del Norte"];

function cadCaracteres(array){
    return array.some(data=>{
        return data>10;
    })
}

console.log(cadCaracteres(vectorcadenas));
//chequear si uno de los elementos de la matriz es true

const vectorBooleano=[[false,false,false],[false,false,false],[false,false,true]];

function matrizTrue(element) { 
    return element == true; 
} 
vectorBooleano.some(matrizTrue)


//verificar si la palabra lost existe dentro del siguiente array
const vectorParrafo=["Strange is the night black stars rise","And strange moons circle through the skies","Lost", "But stranger still is", "Lost Carcacosa"];

console.log(vectorParrafo.includes('Lost'));
