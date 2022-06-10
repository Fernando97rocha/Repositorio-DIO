function operacoes(num1, num2) {
    if(num1, num2 === undefined && num1, num2 === null || !num1, !num2) return 'Defina dois numeros'
    const primeiraFrase = compara(num1, num2);
    const segundaFrase = calcula(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function compara(num1, num2) {
    let saoIguais = '';
    if(num1 !== num2) {
        saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais. `
}

function calcula(num1, num2) {
    let soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if(soma > 10) {
        resultado10 = 'maior';
    }

    if(soma > 20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma} que é ${resultado10} que 10 e ${resultado20} que 20`;
}


console.log(operacoes((-1), 59));