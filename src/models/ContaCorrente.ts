import Conta from "./Conta";
import Debito from "./Debito";
import IUsuario from "./IUsuario";

class ContaCorrente extends Conta {
    private _limite: number;

    constructor(numero: string, limite: number) {
        super(numero);
        this._limite = limite;
    }

    depositar(valor: number): void {
        this._saldo += valor;
    }

    sacar(valor: number): void {
        if (this._saldo - valor >= -this._limite) {
            this._saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    transferir(contaDestino: Conta, valor: number): void {
        if (this.saldo >= valor) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            console.log("Transferência realizada com sucesso.");
        } else {
            console.log("Saldo insuficiente para transferência.");
        }
    }

    calcularSaldo(): number {
        return this._saldo - this._limite;
    }
}
    


export default ContaCorrente;
