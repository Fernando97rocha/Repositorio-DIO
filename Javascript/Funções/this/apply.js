const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Godi',
};

function getNome() {
    console.log(this.nome);
}

getNome.apply(pessoa);