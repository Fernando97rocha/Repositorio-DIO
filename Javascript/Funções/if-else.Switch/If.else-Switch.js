
//if else
function numerosPositivos(num){
    const eNegativo = num < 0;

    if(eNegativo) {
        return false;
    }

    return true;
}



console.log(numerosPositivos(6))


// switch/case

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default: 
            return "peixe";
    }
}

getAnimal(1)