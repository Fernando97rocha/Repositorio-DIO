

const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getNome() {
    console.log(this.nome);
}


getNome.call(animal)




const myObj = {
    num1: 2,
    num2: 3,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 2);