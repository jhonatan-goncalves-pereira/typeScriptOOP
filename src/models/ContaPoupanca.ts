import {Conta} from "./Conta";

export class ContaPoupanca extends Conta {
    
    constructor(numero: string) {
        super(numero);
    }

    depositar(valor: number): void {
        this._saldo += valor;
    }

    sacar(valor: number): void {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    calcularSaldo(): number {
        return this._saldo;
    }

}
