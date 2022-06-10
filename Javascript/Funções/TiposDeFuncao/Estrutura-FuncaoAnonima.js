function nome(parametro) {
    //instruções
    return//valor de retorno;
}


//Função Anonima

const a = function(b, c) {
    return b + c;
}

console.log(a(2, 1));

//Função autoinvocavel

(
    function(a, b) {
        return a + b;
    }
)(4, 4); //verificar melhor


// Função autoivocavel com valor atribuido a uma variavel
const soma = (
    function(a, c) {
        return a + c;
    }
)(3, 4);

console.log(soma)

