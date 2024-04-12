import Conta from "./Conta";

class ContaPoupanca extends Conta {
    
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

export default ContaPoupanca;
