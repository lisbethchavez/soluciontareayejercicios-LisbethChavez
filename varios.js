const vector=[10,20,30,40,50];

vector.forEach((data,indice,array) =>{
    console.log(data, indice,array,array[0]);
})

//Se tiene un array de nombres de personas,se pide devolver el array que incluya unicamente los nombres
//que tienen una sola palabra 

const nombres=["Ethan","Doug","Dexter","Justin","Hailey Bieber","Kaethenis Stuart","Andrew"];

//resultado esperado["Ethan","Doug","Dexter","Justin","Andrew"]

function getNombresDeUnaPalabra(array){
    return array.filter(data=>{
        return data.indexOf(' ')==-1;
    })
}

const nom=getNombresDeUnaPalabra(nombres);
console.log(nom);

//Una funcion recibe una cadena de caracteres,se pide que la funcion devuelva la palabra ingresada
// sin consonantes. 
//Ej: Universidad 
// Resultado esperado: uieia
// ayuda: indexOf, split 

function soloVocales(array){
    var vocales=['a','e','i','o','u','á','é','ó'];
    return array.split("").filter(data=>{
        return vocales.indexOf(data.toLowerCase()) !=-1;
    }).join('');   
}

const p1=soloVocales("Jared");
console.log(p1);
console.log(soloVocales("Méndez"));

//Una funcion recibe un array de palabras, se pide que la función devuelva las palabras 
//que tiene la misma vocla
//EJEMPLO
//salida: ["analgan","zoom","casa"]

entrada=['analgan','zoom','casa','jinete','iglesia','Justin','Bieber'];
function palabrasMismaVocal(array){
    return array.filter(data=>{    
        const strvocales=soloVocales(data);
        //console.log(strvocales);
        return strvocales.split("").every((item,index,array) =>{
            //console.log(item);
            return item==array[0];
        })
    })
}
const x1=palabrasMismaVocal(entrada);
console.log(x1);