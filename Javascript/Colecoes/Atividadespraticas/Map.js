function getAdmins(map) {
    let admin = [];
    for([key, value]of map) {
        if(value === 'admin'){
            admin.push(key);
        }
    }
    return admin;
}

const usuarios = new Map();

usuarios.set('Fernando', 'admin');
usuarios.set('Luiz', 'admin');
usuarios.set('pedro', 'user');
usuarios.set('João', 'user');
usuarios.set('Jorge', 'user');

console.log(getAdmins(usuarios));
