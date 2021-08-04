function dividir(x1,x2){
    if(x2>0){ return x1/x2}
    else{return "No se puede dividir por cero"}
}
//console.log(dividir(6,2));
//console.log(dividir(1,0));
//exports.dividir=dividir;
module.exports=dividir;