// src/models/Conta.ts

abstract class Conta {
    protected _numero: string;
    protected _saldo: number;

    constructor(_numero: string) {
        this._numero = _numero;
        this._saldo = 0; // Inicialize o saldo como zero ao criar uma nova conta
    }

    get numero(): string {
        return this._numero;
    }

    set numero(value: string) {
        this._numero = value;
    }

    get saldo(): number {
        return this._saldo;
    }

    set saldo(value: number) {
        this._saldo = value;
    }

    depositar(valor: number): void {
        this._saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this._saldo) {
            this._saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}

export default Conta;
