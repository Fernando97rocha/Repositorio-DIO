function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 44, 564, 332, 90];

multiplicaPorDois(meusNumeros);