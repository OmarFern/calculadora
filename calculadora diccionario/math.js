const math={}; // lo acumula en un diccionario 
// creo las funciones 



function suma(x1,x2){ return x1 + x2};

function resta(x1,x2){return x1 - x2};

function multiplicar(x1,x2){return x1*x2};

function dividir(x1,x2){
    if(x2>0){ return x1/x2}
    else{return "No se puede dividir por cero"}
}

/*  ahora uso funcion exportar = exports. */

/*
exports.suma=suma;
exports.resta=resta;
exports.multiplicar=multiplicar;
exports.dividir=dividir;
*/
// se puede exportar todo el modulo //
math.suma=suma;
math.resta=resta;
math.multiplicar=multiplicar;
math.dividir=dividir;

module.exports=math;


