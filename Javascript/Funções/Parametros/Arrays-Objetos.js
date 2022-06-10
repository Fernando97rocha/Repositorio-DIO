//ARRAYS

//spread
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3]; 

console.log(sum(...numbers))   //Spread: (...array) transforma cada elemento do array em um argumento da função. 


//rest
function confereTamanho(...args) { //Rest: (...argument) pega cada argumento e "agrupa" em um array.
    console.log(args.length)
}

confereTamanho()
confereTamanho(1, 2, "q")


//OBJECTS

//Técnica Object distucturing

const user = { //user neste caso é um objeto. Seus elementos são separados por vírgulas
    id: 42,
    displayName: "Jdoe",
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}


userId(user)
getFullName(user)

