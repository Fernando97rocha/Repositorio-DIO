// // Exportar e Importar

// // Named Exports

// // Maneira 1

// export function mostrarIdade(pessoa) {
//     return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
// }


// export function mostrarCidade(pessoa) {
//     return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
// }

// // Maneira 2

// function mostrarIdade(pessoa) {
//     return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
// }

// function mostrarCidade(pessoa) {
//     return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
// }

// export {
//     mostrarIdade,
//     mostrarCidade
// }
// // Importando de Named Exports
// import {funcao, variavel, classe} from './arquivo.js'


// // Default Export (Uma default export por arquivo e será o retornoi padrão do seu arquivo)

// function mostrarIdade(pessoa) {
//     return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
// }

// function mostrarCidade(pessoa) {
//     return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
// }

// export {
//     mostrarIdade,
// }

// export default mostrarCidade;

// // Importando de Default Exports
// // import valorDefault from './arquivo.js';


// // trocando nome dos arquivos

// // import {arquivo as Apelido} from './arquivo.js';

// // Apelido.metodo();


// // Importanto todos os dados de um arquivo

// // import * as INFOS from './arquivo.js';

// INFOS.metodo();

// console.log(INFOS.variavel);


// // Vinculando ao HTML

// <script type="module" src="./main.js"></script>