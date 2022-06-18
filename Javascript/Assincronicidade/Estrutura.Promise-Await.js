const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida'));
    }, 2000);
});


await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou')
        .catch((err) => console.log(err.message));

// Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou"

//ASYNC

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    const resolved = await myPromise
            .then((result) => result + 'passando pelo then')
            .then((result) => result + 'e agora aacabou!')
            .catch((err) => console.log(err.message));
    return resolved;
}