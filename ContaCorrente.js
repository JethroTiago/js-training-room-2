import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //ATRIBUTOS PUBLICOS:
    numeroDeContas = 0;
    agencia;
    
    //ATRIBUTOS PRIVADOS:
    _cliente;
    _saldo = 0;

    // ACESSORES

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //CONSTRUTOR

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this.numeroDeContas += 1;
    }

    sacar(valor) {
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

    transferir(valor, conta) {
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    };
};