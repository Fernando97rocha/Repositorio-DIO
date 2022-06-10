// Funcao autoinvocavel

(
    function() {
        let nome = "Dio"
        return nome;
    }
)();


(
    function(a, b) {
        return a + b;
    }
)(1, 4);

const soma1 = (
    function(a, b) {
        return a + b;
    }
)(1, 5);

console.log(soma1);

// Callbacks

const calc = function(operacao ,num1, num2) {
    return operacao(num1, num2);
}

const soma = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultadoSoma = calc(soma, 1, 2);
const resultadoSub = calc(sub, 1, 4);

console.log(resultadoSoma);
console.log(resultadoSub);