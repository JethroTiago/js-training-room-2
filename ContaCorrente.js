class ContaCorrente {
    agencia;
    _saldo;

    sacar(valor) {
        let valorSacado = 200;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        };
    };

    depositar(valor) { 
        if(valor <= 0) 
        {
            return;
        }
        this._saldo += valor;
    };
};