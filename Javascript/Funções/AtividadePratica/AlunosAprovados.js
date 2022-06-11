const alunos = [
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'João',
        nota: 7,
        turma: '2C',
    },
    {
        nome: 'Débora',
        nota: 4,
        turma: '2C',
    },
    {
        nome: 'Carol',
        nota: 3,
        turma: '2C',
    },
];


function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    
    return aprovados;
}


console.log(alunosAprovados(alunos, 5));