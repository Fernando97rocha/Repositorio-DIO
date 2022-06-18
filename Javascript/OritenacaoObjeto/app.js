class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo() {
        return this._saldo;
    }
    
    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(this._saldo < valor) {
            return "Operação negada: Saldo insuficiente."
        }
        this._saldo = this._saldo - valor;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero, cartaoCredito);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        return this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if(valor > 500) {
            return "R$500 é o máximo permitido para saque";
        }
        this._saldo = this._saldo - valor;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}