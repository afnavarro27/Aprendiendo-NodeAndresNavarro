function Sumar(a,b){
    return (a+b);
}

function Restar(a,b){
    return (a-b);
}

function Multiplicar(a,b){
    return (a*b);
}

function Dividir(a,b){
    if (b==0){
        return("No se puede dividir ")
    }else{
    return (a/b);
    }
}

exports.Sumar=Sumar
exports.Restar=Restar
exports.Multiplicar=Multiplicar
exports.Dividir=Dividir