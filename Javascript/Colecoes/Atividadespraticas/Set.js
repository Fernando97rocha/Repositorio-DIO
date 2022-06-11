const meuArray = [30, 30, 40, 5, 223, 2049, 55, 5];

function valoresUnicos(arr) {
    const meuSet = new Set(arr);

    return [...meuSet];// fazendo o spread no Set é possível retornar somente os valores dentro dele tornando o resultado um Array
}

console.log(valoresUnicos(meuArray));