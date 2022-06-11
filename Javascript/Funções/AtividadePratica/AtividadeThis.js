const pessoa1 = {
    nome: 'Pedro',
    idade: 23,
};

const pessoa2 = {
    nome: 'Hugo',
    idade: 16,
};

const pessoa3 = {
    nome: 'Jorge',
    idade: 40,
};


function calculaIdade(anos) {
    return `Daqui a ${anos}, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}


console.log(calculaIdade.call(pessoa1, 34)); //metodo call

console.log(calculaIdade.apply(pessoa2, [5])); //metodo apply